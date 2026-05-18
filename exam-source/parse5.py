"""Parser v5 — works on extracted2.txt (column-walked order).

Each non-empty cell is a question. We parse them in order. Then we cross-
check by matching the solution-key entries 1..38 against the body order.
"""
import json
import re
from pathlib import Path

SRC = Path(__file__).parent / "extracted2.txt"
OUT = Path(__file__).parent / "questions.json"
MD_OUT = Path(__file__).parent / "question-list.md"

raw = SRC.read_text(encoding="utf-8").splitlines()

# Split on ---CELL--- and ---END-COL-N---. We want sequential cells in
# column-walk order. Skip the solution-key table at the end.
SOL_HEADER = "PREDISPITNI TEST 1 - RJEŠENJA"
question_cells: list[list[str]] = []
solution_cells: list[list[str]] = []
current: list[str] = []
state = "questions"  # or "solutions"

for line in raw:
    s = line.strip()
    if not s:
        continue
    if s == SOL_HEADER:
        # flush current, switch state
        if current:
            (question_cells if state == "questions" else solution_cells).append(current)
            current = []
        state = "solutions"
        continue
    if s.startswith("---CELL---") or s.startswith("---END-COL"):
        if current:
            (question_cells if state == "questions" else solution_cells).append(current)
            current = []
        continue
    if s == "PREDISPITNI TEST 1":
        continue
    current.append(s)
if current:
    (question_cells if state == "questions" else solution_cells).append(current)

# Filter out empty cells
question_cells = [c for c in question_cells if c]
solution_cells = [c for c in solution_cells if c]

print(f"Question cells: {len(question_cells)}")
print(f"Solution cells: {len(solution_cells)}")

# Parse solutions
sol_re = re.compile(r"^\s*(\d+)\.\s+(.+?)\s*$")
sol_map: dict[int, str] = {}
for cell in solution_cells:
    text = " ".join(cell)
    m = sol_re.match(text)
    if m:
        sol_map[int(m.group(1))] = m.group(2).strip()
print(f"Solutions parsed: {len(sol_map)} (1..{max(sol_map)})")

# Parse each question cell
IMG_RE = re.compile(r"^\[\[IMG:([^\]]+)\]\]$")
QPREFIX_RE = re.compile(r"^\s*(\d+)\.\s*(.+)$")


def normalize_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def parse_cell(cell: list[str]) -> dict:
    """A cell contains: optional question prefix, title (may span multiple
    lines if wrapped), optional image, then answer options."""
    # First, find the title: concatenate leading lines until one ends with "?"
    title_lines = []
    i = 0
    while i < len(cell):
        title_lines.append(cell[i])
        if cell[i].rstrip().endswith("?"):
            i += 1
            break
        i += 1

    title = normalize_ws(" ".join(title_lines))
    # Strip printed number prefix
    printed_num = None
    m = QPREFIX_RE.match(title)
    if m:
        printed_num = int(m.group(1))
        title = m.group(2).strip()

    image = None
    answers = []
    # Remaining lines: image marker (optional) + answers
    while i < len(cell):
        line = cell[i]
        im = IMG_RE.match(line)
        if im:
            image = im.group(1)
        else:
            # strip leading "N. " or "N.    " from answer (rare embedded numbering)
            ans = re.sub(r"^\s*\d+\.\s+", "", line).strip()
            ans = normalize_ws(ans)
            if ans:
                answers.append(ans)
        i += 1

    return {
        "printed_num": printed_num,
        "title": title,
        "image": image,
        "answers": answers,
    }


parsed: list[dict] = [parse_cell(c) for c in question_cells]

# Assign solution-key numbers by sequence (column-walk order = solution-key order).
for idx, p in enumerate(parsed, start=1):
    sol = sol_map.get(idx, "")
    p["n"] = idx
    p["solution_raw"] = sol
    if re.match(r"^\d+$", sol):
        p["type"] = "CHECKBOX"
        p["correct_indices"] = [int(c) - 1 for c in sol]
    else:
        p["type"] = "NUMBER"
        m = re.match(r"^([\d.,]+)\s*([a-zA-Z/°]*)\s*$", sol)
        if m:
            p["correct_value"] = m.group(1).replace(",", ".")
            p["unit"] = m.group(2) or None
        else:
            p["correct_value"] = sol
            p["unit"] = None

# Print verification table
print("\nVerification (printed_num should match position N where present):")
mismatches = 0
for p in parsed:
    n = p["n"]
    printed = p["printed_num"]
    match = ""
    if printed is not None:
        if printed == n:
            match = "✓"
        else:
            match = f"✗ printed={printed}"
            mismatches += 1
    sol = p["solution_raw"]
    title_short = p["title"][:55]
    print(
        f"  #{n:2d} {match:<14} ans={len(p['answers'])} img={p['image'] or '—':<14} sol={sol:<8} {title_short}"
    )

print(f"\nMismatches: {mismatches}")

# Save JSON + markdown question list
Path(OUT).write_text(json.dumps(parsed, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Wrote {OUT}")

md = ["# Predispitni test 1 — provjeri redoslijed i odgovore\n"]
md.append(
    "Pošalji točne odgovore u formatu: `1: 1`, `2: 23`, `27: 1.6 mm` itd.\n"
)
for p in parsed:
    md.append(f"\n### {p['n']}. {p['title']}")
    if p["image"]:
        md.append(f"  *slika: `{p['image']}`*")
    for j, opt in enumerate(p["answers"], start=1):
        md.append(f"  {j}. {opt}")
Path(MD_OUT).write_text("\n".join(md) + "\n", encoding="utf-8")
print(f"Wrote {MD_OUT}")
