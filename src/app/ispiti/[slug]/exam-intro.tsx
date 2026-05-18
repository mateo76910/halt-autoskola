"use client";
import { useState } from "react";
import {
  Clock,
  Flag,
  ListChecks,
  ShieldAlert,
  Target,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { QuizRunner } from "@/components/quiz/quiz-runner";
import type { Exam } from "@/types/exam";

export function ExamIntro({ exam }: { exam: Exam }) {
  const [started, setStarted] = useState(false);

  if (started) {
    return <QuizRunner exam={exam} />;
  }

  return (
    <Container>
      <div className="py-12 lg:py-20 max-w-4xl mx-auto">
        <SectionLabel>{exam.category}</SectionLabel>
        <h1 className="mt-5 text-[8vw] leading-none sm:text-[3rem] xl:text-[5rem] font-bebas font-extrabold text-white-500 uppercase">
          {exam.title}
        </h1>
        <p className="mt-6 text-xl leading-7 text-white-300 max-w-2xl">
          {exam.description}
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Info icon={ListChecks} label="Pitanja" value={String(exam.questions.length)} />
          <Info
            icon={Clock}
            label="Vrijeme"
            value={`${exam.initialTimeMinutes} min`}
          />
          <Info
            icon={Target}
            label="Za prolaz"
            value={`${exam.pointsToPass} bodova`}
          />
          <Info
            icon={Zap}
            label="Provjera"
            value={exam.validationMode === "instant" ? "Trenutna" : "Na kraju"}
          />
        </div>

        <div className="mt-10 rounded-md border border-green-500/30 bg-green-500/5 p-5 flex gap-3 items-start">
          <ShieldAlert className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
          <div className="text-md leading-6 text-white-300">
            <p className="font-bebas text-xl text-white-500 uppercase">
              Prije početka
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                Ispit traje {exam.initialTimeMinutes} minuta — vrijeme se ne
                pauzira.
              </li>
              <li>
                Eliminacijska pitanja moraš odgovoriti točno za prolaz.
              </li>
              <li>
                {exam.validationMode === "instant"
                  ? "Točnost vidiš odmah nakon provjere svakog pitanja."
                  : "Točne odgovore vidiš tek po završetku ispita."}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-end items-center">
          <Button href="/ispiti" color="white" variant="outline">
            Natrag na ispite
          </Button>
          <Button
            onClick={() => setStarted(true)}
            roundedIcon
            rightElement={<Flag size={16} />}
          >
            Pokreni ispit
          </Button>
        </div>
      </div>
    </Container>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-black-400 bg-black-500/30 p-5">
      <Icon className="h-5 w-5 text-green-500" />
      <p className="mt-3 text-xs uppercase tracking-wider text-white-00">
        {label}
      </p>
      <p className="mt-1 font-bebas text-2xl text-white-500">{value}</p>
    </div>
  );
}
