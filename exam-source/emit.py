"""Emit two artifacts:

1. exam-scaffold.ts — a TypeScript Exam object with all 38 questions and
   isCorrect:false for every option (placeholder for user to fill in).
2. question-list.md — a human-readable numbered list of questions and
   options the user will use to send back the correct-answer mapping.

The body order in `questions.json` is the order they appeared in the .docx
(physical test order). We use that as the canonical position 1..38 for the
new exam, regardless of the .docx's printed answer-key numbers.
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).parent
QS = json.loads((HERE / "questions.json").read_text(encoding="utf-8"))
TS_OUT = HERE / "exam-scaffold.ts"
MD_OUT = HERE / "question-list.md"


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ").strip()


def normalize_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


# Emit TypeScript scaffold (all isCorrect: false; you'll patch correctness later)
ts = []
ts.append('import type { Exam } from "@/types/exam";\n')
ts.append("// Auto-generated scaffold for Predispitni test 1.")
ts.append("// All `isCorrect` set to false — fill in after user provides mapping.\n")
ts.append("export const PREDISPITNI_TEST_1: Exam = {")
ts.append('  id: "predispitni-test-1",')
ts.append('  slug: "predispitni-test-1",')
ts.append('  title: "Predispitni test 1",')
ts.append('  description: "Prometni propisi — predispitni test broj 1. 38 pitanja, prolaz 32 boda.",')
ts.append('  category: "Prometni propisi",')
ts.append("  pointsToPass: 32,")
ts.append("  initialTimeMinutes: 30,")
ts.append('  validationMode: "end",')
ts.append("  questions: [")

for i, q in enumerate(QS, start=1):
    title = normalize_ws(q["title"])
    img = q.get("image")
    ts.append("    {")
    ts.append(f'      id: "q{i}",')
    ts.append(f'      title: "{esc(title)}",')
    if img:
        ts.append(f'      image: "/exam-images/test-1/{img}",')
    ts.append('      type: "CHECKBOX",')
    ts.append("      points: 1,")
    ts.append("      answers: [")
    for opt in q["answers"]:
        ts.append(f'        {{ title: "{esc(normalize_ws(opt))}", isCorrect: false }},')
    ts.append("      ],")
    ts.append("    },")

ts.append("  ],")
ts.append("};")

TS_OUT.write_text("\n".join(ts) + "\n", encoding="utf-8")
print(f"Wrote {TS_OUT}")

# Emit markdown question-list for user review
md = ["# Predispitni test 1 — kontrola odgovora\n"]
md.append(
    "Niže je svih 38 pitanja s numeriranim odgovorima. Pošalji mi listu u formatu:\n"
    "`1: 1`, `2: 23`, `3: 1.6 mm`, itd. (brojevi opcija koje su točne, ili numerička vrijednost s mjernom jedinicom)\n"
)

for i, q in enumerate(QS, start=1):
    title = normalize_ws(q["title"])
    img = q.get("image")
    md.append(f"\n### {i}. {title}")
    if img:
        md.append(f"  *slika: `{img}`*")
    for j, opt in enumerate(q["answers"], start=1):
        md.append(f"  {j}. {normalize_ws(opt)}")

MD_OUT.write_text("\n".join(md) + "\n", encoding="utf-8")
print(f"Wrote {MD_OUT}")
