"""Parse the extracted.txt into structured exam data.

Strategy:
 1. Split into BODY and RJEŠENJA on the "PREDISPITNI TEST 1 - RJEŠENJA" line.
 2. Walk the body. A new question begins on any "question-like" line (ends in ?
    or has 2+ answer-style lines following it). Numbering is unreliable: some
    lines start "1.", some "9.", some "21.", many have none. We rely on the
    SOLUTION KEY (which is reliably numbered 1..38) to decide answer counts.
 3. Each question owns: title, optional image (the next [[IMG:...]] before
    answers begin), and a list of answer texts in order.
 4. The solution key gives, per question, a digit-string like "12" meaning
    options 1 AND 2 are correct, or "1.6 mm" for the numeric question.
 5. Emit a JSON file we can hand-review before transforming into TS.
"""
import json
import re
from pathlib import Path

SRC = Path(__file__).parent / "extracted.txt"
OUT = Path(__file__).parent / "questions.json"
SOL_HEADER = "PREDISPITNI TEST 1 - RJEŠENJA"

raw = SRC.read_text(encoding="utf-8").splitlines()
body, solutions = [], []
in_solutions = False
for line in raw:
    if line.strip() == SOL_HEADER:
        in_solutions = True
        continue
    if line.strip() in ("PREDISPITNI TEST 1", ""):
        continue
    (solutions if in_solutions else body).append(line.rstrip())

# Parse the solution key first; it's reliable and tells us how many questions exist.
sol_re = re.compile(r"^\s*(\d+)\.\s+(.+?)\s*$")
sol_map: dict[int, str] = {}
for s in solutions:
    m = sol_re.match(s)
    if m:
        sol_map[int(m.group(1))] = m.group(2).strip()

print(f"Solutions parsed: {len(sol_map)} (max #{max(sol_map)})")

# Heuristic for question lines: ends with "?" (Croatian questions all end with ?).
# We strip leading "N." or "N." style prefixes for the title text.
QPREFIX = re.compile(r"^\s*\d+\.\s*")
IMG = re.compile(r"^\[\[IMG:([^\]]+)\]\]$")
ANSWER_NUM_PREFIX = re.compile(r"^\s*\d+\.\s+")  # rare embedded "3.    tri"


def looks_like_question(line: str) -> bool:
    return line.rstrip().endswith("?")


# Walk body. Group lines into "blocks": question_text, image?, answers[]
questions: list[dict] = []
cur: dict | None = None

i = 0
while i < len(body):
    line = body[i].strip()
    if not line:
        i += 1
        continue

    if looks_like_question(line):
        # Merge if previous line was a continuation (rare wrapped lines).
        # Save previous question if any.
        if cur is not None:
            questions.append(cur)
        title = QPREFIX.sub("", line).strip()
        # Some titles wrap across multiple lines — peek ahead for additional
        # title fragments. A "fragment" is a non-question, non-image line that
        # likely is question-body when the *next* line ends with ?. But here
        # questions are all single-line in this doc, so we skip merge logic.
        cur = {"title": title, "image": None, "answers": []}
        i += 1
        continue

    m = IMG.match(line)
    if m and cur is not None and not cur["answers"]:
        cur["image"] = m.group(1)
        i += 1
        continue

    # Special: "Na čemu se mora temeljiti ponašanje sudionika u" then "prometu?"
    # — the question text wraps. Heuristic: if a line doesn't end with "?" and
    # the next line is short and ends with "?", concatenate them as the title.
    if cur is None or (cur is not None and not cur["answers"] and cur["title"] and i + 1 < len(body)):
        nxt = body[i + 1].strip() if i + 1 < len(body) else ""
        if cur is None and looks_like_question(nxt):
            # start a new wrapped question
            merged = f"{line} {nxt}".strip()
            merged = QPREFIX.sub("", merged)
            cur = {"title": merged, "image": None, "answers": []}
            i += 2
            continue

    # Otherwise treat as answer option (strip leading "N." if present)
    if cur is not None:
        ans = ANSWER_NUM_PREFIX.sub("", line).strip()
        cur["answers"].append(ans)
    i += 1

if cur is not None:
    questions.append(cur)

print(f"Questions parsed: {len(questions)}")

# Now: there's a numbering mismatch we need to detect. The solution key has
# 38 entries (1..38). We expect 38 questions in body order.
if len(questions) != len(sol_map):
    print(f"⚠️  Mismatch: body has {len(questions)} questions, key has {len(sol_map)}.")
else:
    print("✓ Body question count matches solution key.")

# Attach solutions by index (1-based).
for idx, q in enumerate(questions, start=1):
    sol = sol_map.get(idx, "")
    q["solution"] = sol
    # Decide question type: if solution contains a non-digit (e.g. "1.6 mm"),
    # it's a NUMBER question.
    if re.match(r"^\d+$", sol):
        q["type"] = "CHECKBOX"
        q["correct_indices"] = [int(c) - 1 for c in sol]  # "12" -> [0, 1]
    else:
        q["type"] = "NUMBER"
        # Try to split into value + unit
        m = re.match(r"^([\d.,]+)\s*([a-zA-Z/]*)\s*$", sol)
        if m:
            q["correct_value"] = m.group(1).replace(",", ".")
            q["unit"] = m.group(2) or None
        else:
            q["correct_value"] = sol
            q["unit"] = None

OUT.write_text(json.dumps(questions, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Wrote {OUT}")

# Quick sanity printout
for i, q in enumerate(questions, start=1):
    n_ans = len(q["answers"])
    img = q["image"] or "—"
    sol = q.get("solution") or "?"
    print(f"  #{i:2d}  ans={n_ans}  img={img:<14}  sol={sol}  ::  {q['title'][:60]}")
