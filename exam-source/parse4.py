"""Parser v4 — corrects v3's over-eager wrap detection.

Approach:
 1. Walk body. Every line ending with "?" starts a new block. Everything in
    between (except [[IMG:...]] before answers) is an answer.
 2. Post-process: find blocks with implausibly short titles (e.g. "prometu?")
    and absorb the trailing fragment of the previous block's last answer.
    Specifically: if title is < 30 chars and previous block's last answer
    looks like a non-answer fragment (≤ 30 chars, no period), it's a wrap.
 3. Print everything for manual verification.
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


# Pass 1: collect blocks, NO wrap detection. Every "?"-ending line is a new
# question. Everything else (except IMGs before answers) is an answer.
blocks: list[dict] = []
for i, raw_line in enumerate(body):
    line = raw_line.strip()
    if not line:
        continue
    m = IMG_RE.match(line)
    if m:
        if blocks and not blocks[-1]["answers"]:
            blocks[-1]["image"] = m.group(1)
        continue
    if line.endswith("?"):
        printed_num, rest = split_prefix(line)
        blocks.append(
            {"printed_num": printed_num, "title": rest, "image": None, "answers": []}
        )
        continue
    # answer
    if blocks:
        ans = ANS_PREFIX_RE.sub("", line).strip()
        blocks[-1]["answers"].append(ans)

# Pass 2: detect wrapped titles. A block has a wrapped title if its title is
# short (looks like a final fragment, e.g. "prometu?") AND the previous
# block's last "answer" is also short/fragment-like.
def is_short_title_fragment(t: str) -> bool:
    return len(t) <= 25  # heuristic: tiny title is suspicious

def is_fragment_line(t: str) -> bool:
    # No period, no comma, short, doesn't start with a capital that suggests
    # a complete sentence. Looks like middle-of-a-sentence text.
    if len(t) > 50:
        return False
    if t.endswith(".") or t.endswith(","):
        return False
    return True

for idx in range(1, len(blocks)):
    cur = blocks[idx]
    prev = blocks[idx - 1]
    if not prev["answers"]:
        continue
    if is_short_title_fragment(cur["title"]) and is_fragment_line(prev["answers"][-1]):
        # Treat prev["answers"][-1] as a wrap fragment.
        wrap_fragment = prev["answers"].pop()
        cur["title"] = f"{wrap_fragment} {cur['title']}".strip()
        cur["wrapped"] = True

# Pass 3: assign solution-key numbers using anchors (printed_num).
assigned: list[int] = []
last = 0
for b in blocks:
    if b["printed_num"] is not None:
        # If the printed number jumps backwards or is invalid, just sequence.
        if b["printed_num"] > last:
            last = b["printed_num"]
            assigned.append(last)
            continue
    last += 1
    assigned.append(last)

# Build dict by number
by_num: dict[int, dict] = {}
for b, num in zip(blocks, assigned):
    by_num[num] = b

# Verification
print(f"\nBlocks parsed: {len(blocks)}\n")
print("Assignment:")
for idx, (b, num) in enumerate(zip(blocks, assigned)):
    sol = sol_map.get(num, "??")
    title_short = b["title"][:60].replace("\n", " ")
    marker = "★" if b["printed_num"] is not None else " "
    wrap = "↩" if b.get("wrapped") else " "
    print(f"  #{num:2d} {marker}{wrap} sol={sol:<8} ans={len(b['answers'])} img={b['image'] or '—':<14}  {title_short}")

dups = sorted({n for n in assigned if assigned.count(n) > 1})
missing = sorted(set(sol_map) - set(assigned))
if dups:
    print(f"\n⚠️ Duplicate numbers: {dups}")
if missing:
    print(f"⚠️ Missing solution-key numbers in body: {missing}")

# Emit JSON ordered by solution-key number.
questions = []
for num in sorted(by_num):
    b = by_num[num]
    sol = sol_map.get(num, "")
    q: dict = {
        "n": num,
        "title": b["title"],
        "image": b["image"],
        "answers": b["answers"],
        "solution_raw": sol,
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
print(f"\nWrote {OUT}: {len(questions)} questions.")
