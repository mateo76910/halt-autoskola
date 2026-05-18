"""Extract text + image refs from a .docx with two-column TABLE layout.

The doc has a 2-column table where each row holds two questions (column 1
on the left, column 2 on the right). My first extractor read row-by-row,
which interleaves left/right columns. We need column-by-column: read all
left cells top-to-bottom first, then all right cells top-to-bottom.

We also handle:
 - non-table paragraphs (e.g. the test title "PREDISPITNI TEST 1")
 - the answer-key tables (table 2 = 2-col answer key, table 3 = 1-col list).
   These come AFTER the question table; we just emit their cells in row order.
"""
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}


def load_rels(rels_path: Path) -> dict[str, str]:
    tree = ET.parse(rels_path)
    rels = {}
    for rel in tree.getroot():
        rid = rel.attrib.get("Id")
        target = rel.attrib.get("Target")
        if rid and target:
            rels[rid] = target
    return rels


def paragraph_lines(p, rels):
    """Yield lines for a single <w:p>: zero or one text line, plus image markers."""
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
                    images.append(target.split("/")[-1])
    text = "".join(buf).strip()
    if text:
        yield text
    for img in images:
        yield f"[[IMG:{img}]]"


def cell_text(tc, rels):
    """All lines in a <w:tc> cell, in order."""
    out = []
    for p in tc.iter(f"{{{NS['w']}}}p"):
        out.extend(paragraph_lines(p, rels))
    return out


def main():
    here = Path(__file__).parent
    extracted = here / "extracted"
    rels = load_rels(extracted / "word" / "_rels" / "document.xml.rels")
    tree = ET.parse(extracted / "word" / "document.xml")
    body = tree.getroot().find(f"{{{NS['w']}}}body")

    lines: list[str] = []
    tables_seen = 0

    def walk_table(tbl):
        nonlocal tables_seen
        tables_seen += 1
        # Direct children only — nested tables aren't expected here.
        rows = [r for r in tbl if r.tag == f"{{{NS['w']}}}tr"]
        if not rows:
            return
        # Determine column count: max cells in any row.
        col_count = max(
            sum(1 for c in r if c.tag == f"{{{NS['w']}}}tc") for r in rows
        )
        cells_by_col: list[list] = [[] for _ in range(col_count)]
        for r in rows:
            row_cells = [c for c in r if c.tag == f"{{{NS['w']}}}tc"]
            for idx, tc in enumerate(row_cells):
                if idx < col_count:
                    cells_by_col[idx].append(tc)

        if tables_seen == 1 and col_count >= 2:
            # Question table: walk column 1 top-to-bottom, then column 2.
            for col_idx in range(col_count):
                for tc in cells_by_col[col_idx]:
                    lines.extend(cell_text(tc, rels))
                    lines.append("---CELL---")
                lines.append(f"---END-COL-{col_idx + 1}---")
        else:
            # Other tables (answer keys etc.): just dump row-by-row.
            for r in rows:
                for tc in [c for c in r if c.tag == f"{{{NS['w']}}}tc"]:
                    lines.extend(cell_text(tc, rels))
                    lines.append("---CELL---")

    for child in body:
        tag = child.tag.split("}", 1)[-1]
        if tag == "p":
            lines.extend(paragraph_lines(child, rels))
        elif tag == "tbl":
            walk_table(child)

    out = here / "extracted2.txt"
    out.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {out} with {len(lines)} lines, {tables_seen} tables seen.")


if __name__ == "__main__":
    main()
