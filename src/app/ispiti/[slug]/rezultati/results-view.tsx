"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  Check,
  ChevronDown,
  Clock,
  RefreshCw,
  Target,
  TrendingUp,
  X,
  XCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/cn";
import { formatDuration, getAttemptByIdLocal } from "@/lib/quiz";
import type { Exam, ExamAttempt } from "@/types/exam";

export function ResultsView({
  exam,
  attemptId,
}: {
  exam: Exam;
  attemptId?: string;
}) {
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!attemptId) {
      setReady(true);
      return;
    }
    const found = getAttemptByIdLocal(attemptId);
    if (found) setAttempt(found);
    setReady(true);
  }, [attemptId]);

  if (!ready) return null;

  if (!attempt) {
    return (
      <Container>
        <div className="py-20 max-w-2xl">
          <h1 className="font-bebas text-4xl text-white-500 uppercase">
            Rezultati nisu pronađeni
          </h1>
          <p className="mt-3 text-lg text-white-300">
            Pokušaj ne postoji ili je obrisan. Riješi ispit ponovno.
          </p>
          <div className="mt-6">
            <Button
              href={`/ispiti/${exam.slug}`}
              roundedIcon
              rightElement={<ArrowUpRight size={16} />}
            >
              Otvori ispit
            </Button>
          </div>
        </div>
      </Container>
    );
  }

  const passed = attempt.passed;
  const percentage = Math.round((attempt.totalScore / attempt.maxScore) * 100);
  const correctCount = attempt.answers.filter((a) => a.isCorrect).length;

  return (
    <Container>
      <div className="py-12 lg:py-16 max-w-4xl mx-auto space-y-12">
        <ResultHero
          passed={passed}
          examTitle={exam.title}
          failedDueToElimination={attempt.failedDueToElimination}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatTile
            icon={TrendingUp}
            label="Rezultat"
            value={`${attempt.totalScore} / ${attempt.maxScore}`}
            accent
          />
          <StatTile
            icon={Target}
            label="Za prolaz"
            value={`${attempt.pointsToPass} bod.`}
          />
          <StatTile
            icon={Check}
            label="Točni odgovori"
            value={`${correctCount} / ${attempt.answers.length}`}
          />
          <StatTile
            icon={Clock}
            label="Trajanje"
            value={formatDuration(attempt.durationSeconds)}
          />
        </div>

        <ProgressBar percentage={percentage} passed={passed} />

        <div>
          <SectionLabel>Pregled pitanja</SectionLabel>
          <h2 className="mt-4 font-bebas text-3xl xl:text-4xl text-white-500 uppercase">
            Tvoji odgovori naspram točnih
          </h2>
          <p className="mt-2 text-lg text-white-300">
            Klikni pitanje za detalje.
          </p>

          <div className="mt-8 space-y-3">
            {exam.questions.map((q, i) => (
              <ReviewItem
                key={q.id}
                index={i}
                question={q}
                answer={attempt.answers[i]}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-end pt-2">
          <Button href="/ispiti" color="white" variant="outline">
            Drugi ispit
          </Button>
          <Button
            href={`/ispiti/${exam.slug}`}
            roundedIcon
            rightElement={<RefreshCw size={16} />}
          >
            Pokušaj ponovno
          </Button>
        </div>
      </div>
    </Container>
  );
}

function ResultHero({
  passed,
  examTitle,
  failedDueToElimination,
}: {
  passed: boolean;
  examTitle: string;
  failedDueToElimination: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-md p-8 lg:p-12 border relative overflow-hidden",
        passed
          ? "border-green-500/40 bg-green-500/10"
          : "border-fireOragne-500/40 bg-fireOragne-500/10",
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "grid h-14 w-14 place-items-center rounded-full",
            passed ? "bg-green-500 text-black-500" : "bg-fireOragne-500 text-white-500",
          )}
        >
          {passed ? <Award className="h-7 w-7" /> : <XCircle className="h-7 w-7" />}
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-white-00">
            {examTitle}
          </p>
          <h1 className="mt-1 font-bebas font-extrabold text-4xl xl:text-[3.5rem] leading-[100%] text-white-500 uppercase">
            {passed ? "Položio si!" : "Ispit nije položen"}
          </h1>
        </div>
      </div>
      {failedDueToElimination && (
        <p className="mt-5 inline-block rounded-full px-4 py-1.5 bg-fireOragne-500/15 text-fireOragne-400 text-md">
          Pao si zbog netočno odgovorenog eliminacijskog pitanja.
        </p>
      )}
    </div>
  );
}

function StatTile({
  icon: Icon,
  label,
  value,
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-md border p-5",
        accent
          ? "border-green-500 bg-green-500/10"
          : "border-black-400 bg-black-500/30",
      )}
    >
      <Icon className={cn("h-5 w-5", accent ? "text-green-500" : "text-white-00")} />
      <p className="mt-3 text-xs uppercase tracking-wider text-white-00">
        {label}
      </p>
      <p className="mt-1 font-bebas text-2xl text-white-500">{value}</p>
    </div>
  );
}

function ProgressBar({
  percentage,
  passed,
}: {
  percentage: number;
  passed: boolean;
}) {
  return (
    <div className="rounded-md border border-black-400 bg-black-500/30 p-5">
      <div className="flex items-center justify-between">
        <span className="text-md uppercase tracking-wider text-white-00">
          Uspješnost
        </span>
        <span className="font-bebas text-2xl text-white-500 tabular-nums">
          {percentage}%
        </span>
      </div>
      <div className="mt-3 h-2 bg-black-400 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full transition-all",
            passed ? "bg-green-500" : "bg-fireOragne-500",
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ReviewItem({
  index,
  question,
  answer,
}: {
  index: number;
  question: Exam["questions"][number];
  answer: ExamAttempt["answers"][number];
}) {
  const [open, setOpen] = useState(false);
  const correct = answer.isCorrect;
  return (
    <div className="rounded-md border border-black-400 bg-black-500/30 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <span
          className={cn(
            "grid h-10 w-10 rounded-full place-items-center flex-shrink-0",
            correct
              ? "bg-green-500 text-black-500"
              : "bg-fireOragne-500 text-white-500",
          )}
        >
          {correct ? <Check className="h-5 w-5" strokeWidth={3} /> : <X className="h-5 w-5" strokeWidth={3} />}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-xs uppercase tracking-wider text-white-00">
            Pitanje {index + 1}
          </p>
          <p className="mt-0.5 font-bebas text-xl text-white-500 uppercase line-clamp-1">
            {question.title}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-md text-white-300 tabular-nums">
          {answer.pointsEarned} / {question.points}
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-white-00 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-black-400 pt-5 space-y-4">
          {question.image && (
            <div className="overflow-hidden rounded-md border border-black-400">
              <div className="relative aspect-[16/9]">
                <Image
                  src={question.image}
                  alt={question.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              </div>
            </div>
          )}
          <p className="text-lg text-white-500">{question.title}</p>

          {question.type === "CHECKBOX" && (
            <ul className="space-y-2">
              {question.answers.map((opt, i) => {
                const selected = answer.selectedOptions.includes(i);
                const state =
                  opt.isCorrect && selected
                    ? "correct"
                    : opt.isCorrect && !selected
                    ? "missed"
                    : !opt.isCorrect && selected
                    ? "wrong"
                    : "idle";
                return (
                  <li
                    key={i}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-4 py-3 text-md border",
                      state === "idle" && "border-black-400 text-white-00",
                      state === "correct" &&
                        "border-green-500 bg-green-500/10 text-green-500",
                      state === "wrong" &&
                        "border-fireOragne-500 bg-fireOragne-500/10 text-fireOragne-400",
                      state === "missed" &&
                        "border-green-500/60 bg-green-500/5 text-green-500",
                    )}
                  >
                    <span
                      className={cn(
                        "h-5 w-5 rounded grid place-items-center flex-shrink-0",
                        state === "correct" && "bg-green-500 text-black-500",
                        state === "wrong" && "bg-fireOragne-500 text-white-500",
                        state === "missed" && "border border-green-500",
                        state === "idle" && "border border-black-300",
                      )}
                    >
                      {state === "correct" && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                      {state === "wrong" && <X className="h-3.5 w-3.5" strokeWidth={3} />}
                      {state === "missed" && <Check className="h-3 w-3 text-green-500" strokeWidth={3} />}
                    </span>
                    <span className="flex-1">{opt.title}</span>
                    {state === "correct" && (
                      <span className="text-xs uppercase tracking-wider">tvoj · točno</span>
                    )}
                    {state === "wrong" && (
                      <span className="text-xs uppercase tracking-wider">tvoj · netočno</span>
                    )}
                    {state === "missed" && (
                      <span className="text-xs uppercase tracking-wider">točan</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {question.type === "NUMBER" && (
            <div className="grid sm:grid-cols-2 gap-3 text-md">
              <div className="flex items-center justify-between rounded-md border border-black-400 px-4 py-3">
                <span className="text-white-00 uppercase tracking-wider text-xs">
                  Tvoj odgovor
                </span>
                <span
                  className={cn(
                    "font-bebas text-xl",
                    correct ? "text-green-500" : "text-fireOragne-400",
                  )}
                >
                  {answer.numberAnswer || "—"}
                  {question.measurementUnit && answer.numberAnswer
                    ? ` ${question.measurementUnit}`
                    : ""}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-green-500 bg-green-500/10 px-4 py-3">
                <span className="text-green-500 uppercase tracking-wider text-xs">
                  Točan odgovor
                </span>
                <span className="font-bebas text-xl text-green-500">
                  {question.answers[0]?.title}
                  {question.measurementUnit ? ` ${question.measurementUnit}` : ""}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
