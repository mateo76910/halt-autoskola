"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Award, History, LogOut, Mail, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getSupabaseBrowserClient,
  isSupabaseEnabled,
} from "@/lib/supabase/client";
import { fetchMyAttempts } from "@/lib/supabase/attempts";
import { getAttemptsLocal } from "@/lib/quiz";
import type { ExamAttempt } from "@/types/exam";

export function ProfileSummary() {
  const [email, setEmail] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const supabase = getSupabaseBrowserClient();
      if (supabase) {
        const { data } = await supabase.auth.getUser();
        setEmail(data.user?.email ?? null);
        if (data.user) {
          setAttempts(await fetchMyAttempts());
          setLoaded(true);
          return;
        }
      }
      setAttempts(getAttemptsLocal());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) return null;

  const passed = attempts.filter((a) => a.passed).length;
  const passRate =
    attempts.length === 0 ? 0 : Math.round((passed / attempts.length) * 100);

  return (
    <div className="space-y-8">
      <div className="rounded-md border border-black-400 bg-black-500/30 p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500/15 text-green-500">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-white-00">Račun</p>
            <p className="mt-1 font-bebas text-xl text-white-500">
              {email ?? (isSupabaseEnabled() ? "Nisi prijavljen" : "Lokalni pokušaji")}
            </p>
          </div>
        </div>
        {email ? (
          <Button color="white" variant="outline" href="/odjava" leftElement={<LogOut size={16} />}>
            Odjava
          </Button>
        ) : (
          isSupabaseEnabled() && <Button href="/prijava">Prijavi se</Button>
        )}
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon={History} label="Pokušaja" value={String(attempts.length)} />
        <StatCard icon={Award} label="Položenih" value={String(passed)} />
        <StatCard icon={TrendingUp} label="Prolaznost" value={`${passRate}%`} />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="font-bebas text-2xl text-white-500 uppercase">
          Posljednji pokušaji
        </h2>
        <Link
          href="/profil/povijest"
          className="text-md text-green-500 hover:underline"
        >
          Cijela povijest →
        </Link>
      </div>

      {attempts.length === 0 ? (
        <div className="rounded-md border border-black-400 bg-black-500/30 p-8 text-center">
          <p className="text-white-300">
            Još nemaš pokušaja.{" "}
            <Link href="/ispiti" className="text-green-500 hover:underline">
              Riješi prvi ispit
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {attempts.slice(0, 5).map((a) => (
            <AttemptRow key={a.id} attempt={a} />
          ))}
        </div>
      )}
    </div>
  );
}

function StatCard({
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
      <p className="mt-3 text-xs uppercase tracking-wider text-white-00">{label}</p>
      <p className="mt-1 font-bebas text-3xl text-white-500">{value}</p>
    </div>
  );
}

function AttemptRow({ attempt }: { attempt: ExamAttempt }) {
  const date = new Date(attempt.finishedAt).toLocaleString("hr-HR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return (
    <div className="rounded-md border border-black-400 bg-black-500/30 p-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="font-bebas text-xl text-white-500 uppercase">
          {attempt.examTitle}
        </p>
        <p className="mt-0.5 text-xs uppercase tracking-wider text-white-00">{date}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-md text-white-300 tabular-nums">
          {attempt.totalScore} / {attempt.maxScore}
        </span>
        <span
          className={
            "rounded-full px-3 py-1 text-xs uppercase tracking-wider " +
            (attempt.passed
              ? "bg-green-500/15 text-green-500"
              : "bg-fireOragne-500/15 text-fireOragne-400")
          }
        >
          {attempt.passed ? "Položio" : "Pao"}
        </span>
        <Link
          href={`/ispiti/${attempt.examSlug}/rezultati?attempt=${attempt.id}`}
          className="text-md text-green-500 hover:underline"
        >
          Detalji →
        </Link>
      </div>
    </div>
  );
}
