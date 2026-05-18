"""Extract text + image references in document order from a .docx file.

We parse word/document.xml directly so we don't depend on python-docx, and we
preserve the order of paragraphs and image anchors as they appear in the
document. Image references are emitted as `[[IMG:filename]]` markers.
"""
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "pic": "http://schemas.openxmlformats.org/drawingml/2006/picture",
    "wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
}

def load_rels(rels_path: Path) -> dict[str, str]:
    """rId -> Target (e.g. media/image1.jpeg)."""
    tree = ET.parse(rels_path)
    rels = {}
    for rel in tree.getroot():
        rid = rel.attrib.get("Id")
        target = rel.attrib.get("Target")
        if rid and target:
            rels[rid] = target
    return rels


def walk_paragraphs(body_elem, rels):
    """Yield text paragraphs + image markers in order."""
    for child in body_elem:
        tag = child.tag.split("}", 1)[-1]
        if tag == "p":
            yield from emit_paragraph(child, rels)
        elif tag == "tbl":
            # Tables: walk through their paragraphs flatly
            for row in child.iter(f"{{{NS['w']}}}tr"):
                for cell in row.iter(f"{{{NS['w']}}}tc"):
                    for p in cell.iter(f"{{{NS['w']}}}p"):
                        yield from emit_paragraph(p, rels)


def emit_paragraph(p, rels):
    buf = []
    images = []
    for run in p.iter(f"{{{NS['w']}}}r"):
        for child in run.iter():
            ctag = child.tag.split("}", 1)[-1]
            if ctag == "t":
                buf.append(child.text or "")
            elif ctag == "tab":
                buf.append("\t")
            elif ctag == "br":
                buf.append("\n")
            elif ctag == "blip":
                rid = child.attrib.get(f"{{{NS['r']}}}embed")
                if rid and rid in rels:
                    target = rels[rid]
                    name = target.split("/")[-1]
                    images.append(name)
    text = "".join(buf).strip()
    if text:
        yield ("text", text)
    for img in images:
        yield ("image", img)


def main(docx_extracted: Path, out_path: Path):
    rels = load_rels(docx_extracted / "word" / "_rels" / "document.xml.rels")
    tree = ET.parse(docx_extracted / "word" / "document.xml")
    body = tree.getroot().find(f"{{{NS['w']}}}body")
    lines = []
    for kind, payload in walk_paragraphs(body, rels):
        if kind == "text":
            lines.append(payload)
        else:
            lines.append(f"[[IMG:{payload}]]")
    out_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {out_path} ({len(lines)} lines)")


if __name__ == "__main__":
    extracted_dir = Path(__file__).parent / "extracted"
    out = Path(__file__).parent / "extracted.txt"
    main(extracted_dir, out)
