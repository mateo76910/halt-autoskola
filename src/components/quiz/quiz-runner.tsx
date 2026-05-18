"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Timer } from "./timer";
import { QuestionView } from "./question-view";
import {
  buildAttempt,
  emptyAnswer,
  gradeAnswer,
  saveAttemptLocal,
} from "@/lib/quiz";
import { persistAttempt } from "@/lib/supabase/attempts";
import type { Exam, UserAnswer } from "@/types/exam";

export function QuizRunner({ exam }: { exam: Exam }) {
  const router = useRouter();
  const [startedAt] = useState(() => new Date());
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(() =>
    exam.questions.map(() => emptyAnswer()),
  );
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set());

  const question = exam.questions[index];
  const answer = answers[index];
  const isInstant = exam.validationMode === "instant";
  const revealed = isInstant && revealedSet.has(index);
  const totalProgress = useMemo(
    () => answers.filter((a) => a.answered).length,
    [answers],
  );

  const updateAnswer = (next: UserAnswer) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = next;
      return copy;
    });
  };

  const onToggleOption = (i: number) => {
    const selected = answer.selectedOptions.includes(i)
      ? answer.selectedOptions.filter((x) => x !== i)
      : [...answer.selectedOptions, i];
    updateAnswer({ ...answer, selectedOptions: selected });
  };

  const onNumberChange = (v: string) => {
    updateAnswer({ ...answer, numberAnswer: v });
  };

  const validateCurrent = () => {
    const graded = gradeAnswer(question, answer);
    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = {
        ...copy[index],
        isCorrect: graded.isCorrect,
        pointsEarned: graded.pointsEarned,
        answered: true,
      };
      return copy;
    });
  };

  const handleCheck = () => {
    validateCurrent();
    setRevealedSet((s) => new Set(s).add(index));
  };

  const handleNext = () => {
    if (isInstant && !revealedSet.has(index)) {
      validateCurrent();
      setRevealedSet((s) => new Set(s).add(index));
      return;
    }
    if (!isInstant) validateCurrent();
    if (index + 1 < exam.questions.length) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const finishExam = () => {
    const updated = [...answers];
    exam.questions.forEach((q, i) => {
      if (!updated[i].answered) {
        const graded = gradeAnswer(q, updated[i]);
        updated[i] = {
          ...updated[i],
          isCorrect: graded.isCorrect,
          pointsEarned: graded.pointsEarned,
          answered: true,
        };
      }
    });
    const attempt = buildAttempt({
      examId: exam.id,
      examSlug: exam.slug,
      examTitle: exam.title,
      startedAt,
      finishedAt: new Date(),
      questions: exam.questions,
      answers: updated,
      pointsToPass: exam.pointsToPass,
    });
    saveAttemptLocal(attempt);
    void persistAttempt(attempt);
    router.push(`/ispiti/${exam.slug}/rezultati?attempt=${attempt.id}`);
  };

  const isLast = index + 1 === exam.questions.length;
  const allRevealed = revealedSet.size === exam.questions.length;

  return (
    <Container>
      <div className="py-12 lg:py-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-white-00">Ispit</p>
            <p className="font-bebas text-3xl text-white-500 uppercase mt-1">
              {exam.title}
            </p>
          </div>
          <Timer
            initialSeconds={exam.initialTimeMinutes * 60}
            onElapsed={finishExam}
          />
        </div>

        <div className="mb-6">
          <div className="h-1 w-full bg-black-400 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{
                width: `${((index + 1) / exam.questions.length) * 100}%`,
              }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs uppercase tracking-wider text-white-00">
            <span>
              Pitanje {index + 1} od {exam.questions.length}
            </span>
            <span>
              Odgovoreno {totalProgress}/{exam.questions.length}
            </span>
          </div>
        </div>

        <div className="rounded-md border border-black-400 bg-black-500/30 backdrop-blur-sm p-6 lg:p-10">
          <QuestionView
            question={question}
            index={index}
            total={exam.questions.length}
            answer={answer}
            revealed={revealed}
            onToggleOption={onToggleOption}
            onNumberChange={onNumberChange}
          />

          {revealed && (
            <div
              className={
                "mt-6 rounded-md px-4 py-3 text-md leading-5 " +
                (answer.isCorrect
                  ? "bg-green-500/10 text-green-500 border border-green-500/40"
                  : "bg-fireOragne-500/10 text-fireOragne-400 border border-fireOragne-500/40")
              }
            >
              {answer.isCorrect
                ? `Točno! +${answer.pointsEarned} bod${
                    answer.pointsEarned === 1 ? "" : "a"
                  }.`
                : "Netočan odgovor."}
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-black-400 flex flex-wrap items-center justify-between gap-3">
            <Button
              variant="outline"
              color="white"
              onClick={handlePrev}
              disabled={index === 0}
              leftElement={<ArrowLeft size={16} />}
            >
              Prethodno
            </Button>

            <div className="flex items-center gap-2">
              {isInstant && !revealed && (
                <Button variant="outline" color="white" onClick={handleCheck}>
                  Provjeri
                </Button>
              )}
              {isLast ? (
                isInstant && !allRevealed ? (
                  <Button
                    onClick={handleNext}
                    roundedIcon
                    rightElement={<ArrowRight size={16} />}
                  >
                    Sljedeće
                  </Button>
                ) : (
                  <Button
                    onClick={finishExam}
                    roundedIcon
                    rightElement={<Flag size={16} />}
                  >
                    Završi ispit
                  </Button>
                )
              ) : (
                <Button
                  onClick={handleNext}
                  roundedIcon
                  rightElement={<ArrowRight size={16} />}
                >
                  Sljedeće
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={finishExam}
            className="text-sm text-white-00 hover:text-fireOragne-400 underline-offset-4 hover:underline"
          >
            Odustani i pošalji rezultat
          </button>
        </div>
      </div>
    </Container>
  );
}
