"""Improved parser.

The .docx is mixed-order: some questions have printed numbers like "9.", "13.",
"21.", "29.", "24." which DO match the solution-key numbering. Others have no
printed number. The body is in physical order, not solution-key order.

Strategy:
 1. Walk the body collecting "question blocks". Each block = title (may wrap
    across lines), optional image, list of answer texts.
 2. When a block's title starts with "N.", that N is the block's solution
    key index.
 3. For un-numbered blocks, fill the gap using the printed anchors. Between
    two anchors N_a and N_b with K un-numbered blocks in between, the
    un-numbered blocks must fill consecutive numbers — but we need to know
    where in the [N_a+1 .. N_b-1] range they go.

After looking at the doc more carefully, here's what I think is actually
happening: the doc has a logical structure where numbered prefixes appear
sporadically; un-numbered questions belong to the immediately preceding
"sequence" and are numbered consecutively until the next anchor.

So: the n-th un-numbered block after anchor N_a takes number N_a + n
(provided that's < the next anchor or, if there is none ahead, <= 38).

Let's just emit blocks in physical order with their anchor and let me
manually verify by comparing answer count + content with the solution key.
"""
import json
import re
from pathlib import Path

SRC = Path(__file__).parent / "extracted.txt"
OUT = Path(__file__).parent / "questions.json"
SOL_HEADER = "PREDISPITNI TEST 1 - RJEŠENJA"

raw = [l.rstrip() for l in SRC.read_text(encoding="utf-8").splitlines()]

body, solutions = [], []
in_solutions = False
for line in raw:
    if line.strip() == SOL_HEADER:
        in_solutions = True
        continue
    if line.strip() in ("PREDISPITNI TEST 1", ""):
        continue
    (solutions if in_solutions else body).append(line)

# Solutions
sol_re = re.compile(r"^\s*(\d+)\.\s+(.+?)\s*$")
sol_map: dict[int, str] = {}
for s in solutions:
    m = sol_re.match(s)
    if m:
        sol_map[int(m.group(1))] = m.group(2).strip()

IMG_RE = re.compile(r"^\[\[IMG:([^\]]+)\]\]$")
# A question line: ends with "?". May start with optional "N." prefix.
# May wrap across multiple physical lines — we'll merge if next line ends with ?
# AND current line doesn't.
QPREFIX_RE = re.compile(r"^\s*(\d+)\.\s*(.*)$")
ANSWER_NUM_PREFIX_RE = re.compile(r"^\s*\d+\.\s+")


def split_prefix(line: str):
    """Return (number or None, rest)."""
    m = QPREFIX_RE.match(line.strip())
    if m:
        return (int(m.group(1)), m.group(2).strip())
    return (None, line.strip())


# Walk body, collecting blocks
blocks: list[dict] = []
i = 0
while i < len(body):
    line = body[i].strip()
    if not line:
        i += 1
        continue

    # Try to detect a question (current line ends in ? OR wraps to a line ending in ?)
    if line.endswith("?"):
        title = line
        printed_num, rest = split_prefix(title)
        title_clean = rest if printed_num is not None else title
        block = {
            "printed_num": printed_num,
            "title": title_clean,
            "image": None,
            "answers": [],
            "line": i + 1,
        }
        blocks.append(block)
        i += 1
        continue

    # Check wrap: current line doesn't end with ? but next does
    if i + 1 < len(body) and body[i + 1].strip().endswith("?"):
        merged = (line + " " + body[i + 1].strip()).strip()
        printed_num, rest = split_prefix(merged)
        title_clean = rest if printed_num is not None else merged
        block = {
            "printed_num": printed_num,
            "title": title_clean,
            "image": None,
            "answers": [],
            "line": i + 1,
            "wrapped": True,
        }
        blocks.append(block)
        i += 2
        continue

    # Image attaches to most recent block if no answers yet
    m = IMG_RE.match(line)
    if m and blocks and not blocks[-1]["answers"]:
        blocks[-1]["image"] = m.group(1)
        i += 1
        continue

    # Otherwise: answer option (strip leading "N. " if any)
    if blocks:
        ans = ANSWER_NUM_PREFIX_RE.sub("", line).strip()
        blocks[-1]["answers"].append(ans)
    i += 1

print(f"\nParsed {len(blocks)} blocks. Solution key has {len(sol_map)} entries.\n")

# Now assign sol-key numbers.
# Use printed_num anchors. Between anchors, fill consecutively starting at
# (last anchor + 1).
last_anchor = 0
assigned: list[int] = []
for idx, b in enumerate(blocks):
    if b["printed_num"] is not None:
        assigned.append(b["printed_num"])
        last_anchor = b["printed_num"]
    else:
        last_anchor += 1
        assigned.append(last_anchor)

# Sanity check: every assigned number should be unique and within 1..38.
print("Assignment:")
for idx, (b, n) in enumerate(zip(blocks, assigned)):
    sol = sol_map.get(n, "??")
    title_short = b["title"][:55].replace("\n", " ")
    marker = "★" if b["printed_num"] is not None else " "
    print(f"  block[{idx:2d}] -> #{n:2d} {marker} sol={sol:<8}  ans={len(b['answers'])}  img={b['image'] or '—':<14}  {title_short}")

# Validate uniqueness
dup = [n for n in assigned if assigned.count(n) > 1]
if dup:
    print(f"\n⚠️ Duplicate numbers: {sorted(set(dup))}")
else:
    print("\n✓ All assignment numbers unique")

# Now produce the structured questions list.
questions = []
for n in sorted(set(assigned)):
    b = blocks[assigned.index(n)]
    sol = sol_map.get(n, "")
    q = {
        "n": n,
        "title": b["title"],
        "image": b["image"],
        "answers": b["answers"],
        "solution": sol,
    }
    if re.match(r"^\d+$", sol):
        q["type"] = "CHECKBOX"
        q["correct_indices"] = [int(c) - 1 for c in sol]
    else:
        q["type"] = "NUMBER"
        m = re.match(r"^([\d.,]+)\s*([a-zA-Z/]*)\s*$", sol)
        if m:
            q["correct_value"] = m.group(1).replace(",", ".")
            q["unit"] = m.group(2) or None
        else:
            q["correct_value"] = sol
            q["unit"] = None
    questions.append(q)

OUT.write_text(json.dumps(questions, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"\nWrote {OUT} with {len(questions)} questions.")
