"use client";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Question, UserAnswer } from "@/types/exam";

export function QuestionView({
  question,
  index,
  total,
  answer,
  revealed,
  onToggleOption,
  onNumberChange,
}: {
  question: Question;
  index: number;
  total: number;
  answer: UserAnswer;
  revealed: boolean;
  onToggleOption: (i: number) => void;
  onNumberChange: (v: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider">
        <span className="rounded-full px-3 py-1 bg-green-500/15 text-green-500">
          Pitanje {index + 1} / {total}
        </span>
        <span className="rounded-full px-3 py-1 bg-white-500/10 text-white-300">
          {question.points} {question.points === 1 ? "bod" : "boda"}
        </span>
        {question.isElimination && (
          <span className="rounded-full px-3 py-1 bg-fireOragne-500/20 text-fireOragne-400">
            Eliminacijsko
          </span>
        )}
      </div>

      <h2 className="font-bebas font-extrabold text-3xl xl:text-4xl leading-[100%] text-white-500 uppercase">
        {question.title}
      </h2>

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

      {question.type === "CHECKBOX" && (
        <div className="space-y-3">
          {question.answers.map((opt, i) => {
            const selected = answer.selectedOptions.includes(i);
            const isCorrect = opt.isCorrect;
            const state = !revealed
              ? selected
                ? "selected"
                : "idle"
              : selected && isCorrect
              ? "correct"
              : selected && !isCorrect
              ? "wrong"
              : !selected && isCorrect
              ? "missed"
              : "idle";

            return (
              <button
                type="button"
                key={i}
                disabled={revealed}
                onClick={() => onToggleOption(i)}
                className={cn(
                  "w-full text-left flex items-center gap-3 rounded-md border px-4 py-4 transition-all",
                  state === "idle" &&
                    "border-black-400 hover:border-green-500 text-white-300 hover:text-white-500",
                  state === "selected" && "border-green-500 text-white-500 bg-green-500/5",
                  state === "correct" &&
                    "border-green-500 bg-green-500/10 text-white-500",
                  state === "wrong" &&
                    "border-fireOragne-500 bg-fireOragne-500/10 text-white-500",
                  state === "missed" &&
                    "border-green-500/60 bg-green-500/5 text-white-300",
                  revealed && "cursor-default",
                )}
              >
                <span
                  className={cn(
                    "h-6 w-6 rounded-md border grid place-items-center flex-shrink-0",
                    state === "idle" && "border-black-300",
                    state === "selected" && "border-green-500 bg-green-500",
                    state === "correct" && "border-green-500 bg-green-500",
                    state === "wrong" && "border-fireOragne-500 bg-fireOragne-500",
                    state === "missed" && "border-green-500 bg-transparent text-green-500",
                  )}
                >
                  {state === "selected" && <Check className="h-4 w-4 text-black-500" strokeWidth={3} />}
                  {state === "correct" && <Check className="h-4 w-4 text-black-500" strokeWidth={3} />}
                  {state === "wrong" && <X className="h-4 w-4 text-white-500" strokeWidth={3} />}
                  {state === "missed" && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
                <span className="text-lg leading-6">{opt.title}</span>
              </button>
            );
          })}
        </div>
      )}

      {question.type === "NUMBER" && (
        <div>
          <label className="text-md uppercase tracking-wider text-white-00">
            Tvoj odgovor
          </label>
          <div
            className={cn(
              "mt-2 flex items-stretch rounded-md border bg-black-500/30 overflow-hidden",
              revealed
                ? answer.isCorrect
                  ? "border-green-500"
                  : "border-fireOragne-500"
                : "border-black-400 focus-within:border-green-500",
            )}
          >
            <input
              type="number"
              disabled={revealed}
              value={answer.numberAnswer}
              onChange={(e) => onNumberChange(e.target.value)}
              placeholder="Unesi broj"
              className="flex-1 h-14 px-4 bg-transparent font-bebas text-2xl text-white-500 placeholder:text-white-00/50 focus:outline-none disabled:opacity-80"
            />
            {question.measurementUnit && (
              <span className="grid place-items-center px-5 bg-black-400/30 font-bebas text-2xl text-white-300">
                {question.measurementUnit}
              </span>
            )}
          </div>
          {revealed && (
            <p
              className={cn(
                "mt-3 text-md leading-5",
                answer.isCorrect
                  ? "text-green-500"
                  : "text-fireOragne-400",
              )}
            >
              {answer.isCorrect
                ? "Točan odgovor."
                : `Točan odgovor: ${question.answers[0]?.title}${
                    question.measurementUnit ? ` ${question.measurementUnit}` : ""
                  }`}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
