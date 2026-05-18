"""Robust parser, v3.

Key insight: questions always end with "?". Answer lines never do.
A "wrap" (title split across two lines) is detected as:
  - current line doesn't end with "?"
  - next line ends with "?"
  - the current question already has ≥2 collected answers (so we know its
    answer block is complete and the current line is the START of the next
    question's title)

The body is in physical order. The solution key uses different numbering
(some questions are out of solution-key order in the body). We assign each
block a solution-key number using printed "N." prefixes as anchors and
sequencing un-numbered blocks between anchors.
"""
import json
import re
from pathlib import Path

SRC = Path(__file__).parent / "extracted.txt"
OUT = Path(__file__).parent / "questions.json"
SOL_HEADER = "PREDISPITNI TEST 1 - RJEŠENJA"

raw = [l.rstrip() for l in SRC.read_text(encoding="utf-8").splitlines()]
body, solutions, in_sol = [], [], False
for line in raw:
    if line.strip() == SOL_HEADER:
        in_sol = True
        continue
    if line.strip() in ("PREDISPITNI TEST 1", ""):
        continue
    (solutions if in_sol else body).append(line)

# Parse solutions
sol_re = re.compile(r"^\s*(\d+)\.\s+(.+?)\s*$")
sol_map: dict[int, str] = {}
for s in solutions:
    m = sol_re.match(s)
    if m:
        sol_map[int(m.group(1))] = m.group(2).strip()

IMG_RE = re.compile(r"^\[\[IMG:([^\]]+)\]\]$")
QPREFIX_RE = re.compile(r"^\s*(\d+)\.\s*(.+)$")
ANS_PREFIX_RE = re.compile(r"^\s*\d+\.\s+")


def split_prefix(line: str):
    m = QPREFIX_RE.match(line)
    if m:
        return int(m.group(1)), m.group(2).strip()
    return None, line.strip()


blocks: list[dict] = []
i = 0
n = len(body)
while i < n:
    line = body[i].strip()
    if not line:
        i += 1
        continue

    # IMAGE: attach to current block if no answers yet
    m = IMG_RE.match(line)
    if m:
        if blocks and not blocks[-1]["answers"]:
            blocks[-1]["image"] = m.group(1)
        i += 1
        continue

    # WRAP detect: current line doesn't end with ?, next does, and previous
    # block already has ≥2 answers (so its answer block is complete).
    if (
        not line.endswith("?")
        and i + 1 < n
        and body[i + 1].strip().endswith("?")
        and blocks
        and len(blocks[-1]["answers"]) >= 2
    ):
        merged = (line + " " + body[i + 1].strip()).strip()
        printed_num, rest = split_prefix(merged)
        blocks.append(
            {
                "printed_num": printed_num,
                "title": rest,
                "image": None,
                "answers": [],
                "wrapped": True,
            }
        )
        i += 2
        continue

    # QUESTION line
    if line.endswith("?"):
        printed_num, rest = split_prefix(line)
        blocks.append(
            {
                "printed_num": printed_num,
                "title": rest,
                "image": None,
                "answers": [],
            }
        )
        i += 1
        continue

    # OTHERWISE: answer for current block (strip leading "N." if any)
    if blocks:
        ans = ANS_PREFIX_RE.sub("", line).strip()
        blocks[-1]["answers"].append(ans)
    i += 1

print(f"\nParsed {len(blocks)} blocks. Solution key has {len(sol_map)} entries.\n")

# Assign solution-key numbers via printed-num anchors.
# Strategy: walk blocks; when we hit an anchor N, that block IS N. Blocks
# before the first anchor get numbered 1..; blocks between two anchors get
# numbered consecutively from (prev_anchor+1).
assigned: list[int] = []
last = 0
for b in blocks:
    if b["printed_num"] is not None:
        assigned.append(b["printed_num"])
        last = b["printed_num"]
    else:
        last += 1
        assigned.append(last)

# Print verification
print("Assignment table:")
for idx, (b, num) in enumerate(zip(blocks, assigned)):
    sol = sol_map.get(num, "??")
    title_short = b["title"][:55].replace("\n", " ")
    marker = "★" if b["printed_num"] is not None else " "
    wrap = "↩" if b.get("wrapped") else " "
    print(
        f"  block[{idx:2d}] -> #{num:2d} {marker}{wrap} sol={sol:<8} ans={len(b['answers'])} "
        f"img={b['image'] or '—':<14}  {title_short}"
    )

# Validate uniqueness + range
dups = sorted({n for n in assigned if assigned.count(n) > 1})
if dups:
    print(f"\n⚠️ Duplicate numbers assigned: {dups}")
out_of_range = [n for n in assigned if n < 1 or n > max(sol_map)]
if out_of_range:
    print(f"⚠️ Out of range numbers: {out_of_range}")
missing = sorted(set(sol_map) - set(assigned))
if missing:
    print(f"⚠️ Missing assignments: {missing}")

# Build final questions list, ordered by solution-key number
by_num = {num: (b, sol_map.get(num, "")) for b, num in zip(blocks, assigned)}
questions = []
for num in sorted(by_num):
    b, sol = by_num[num]
    q: dict = {
        "n": num,
        "title": b["title"],
        "image": b["image"],
        "answers": b["answers"],
        "solution_raw": sol,
        "wrapped_title": b.get("wrapped", False),
    }
    if re.match(r"^\d+$", sol):
        q["type"] = "CHECKBOX"
        q["correct_indices"] = [int(c) - 1 for c in sol]
    else:
        q["type"] = "NUMBER"
        m = re.match(r"^([\d.,]+)\s*([a-zA-Z/°]*)\s*$", sol)
        if m:
            q["correct_value"] = m.group(1).replace(",", ".")
            q["unit"] = m.group(2) or None
        else:
            q["correct_value"] = sol
            q["unit"] = None
    questions.append(q)

OUT.write_text(json.dumps(questions, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"\nWrote {OUT} with {len(questions)} questions.")
