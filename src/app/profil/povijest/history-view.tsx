"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { fetchMyAttempts } from "@/lib/supabase/attempts";
import { getAttemptsLocal, formatDuration } from "@/lib/quiz";
import type { ExamAttempt } from "@/types/exam";

export function HistoryView() {
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const supabase = getSupabaseBrowserClient();
      if (supabase) {
        const { data } = await supabase.auth.getUser();
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

  if (attempts.length === 0) {
    return (
      <div className="rounded-md border border-black-400 bg-black-500/30 p-10 text-center">
        <p className="text-white-300">Još nemaš nijedan riješen ispit.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-black-400 bg-black-500/30">
      <table className="w-full text-md">
        <thead className="bg-black-500/50 text-white-00 text-xs uppercase tracking-wider">
          <tr>
            <th className="text-left px-5 py-4 font-medium">Ispit</th>
            <th className="text-left px-5 py-4 font-medium">Datum</th>
            <th className="text-left px-5 py-4 font-medium">Trajanje</th>
            <th className="text-left px-5 py-4 font-medium">Rezultat</th>
            <th className="text-left px-5 py-4 font-medium">Status</th>
            <th className="text-right px-5 py-4 font-medium"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black-400">
          {attempts.map((a) => (
            <tr key={a.id} className="hover:bg-black-500/40 transition-colors">
              <td className="px-5 py-4 font-bebas text-xl text-white-500 uppercase">
                {a.examTitle}
              </td>
              <td className="px-5 py-4 text-white-300">
                {new Date(a.finishedAt).toLocaleString("hr-HR", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </td>
              <td className="px-5 py-4 text-white-300 tabular-nums">
                {formatDuration(a.durationSeconds)}
              </td>
              <td className="px-5 py-4 text-white-300 tabular-nums">
                {a.totalScore} / {a.maxScore}
              </td>
              <td className="px-5 py-4">
                <span
                  className={
                    "rounded-full px-3 py-1 text-xs uppercase tracking-wider " +
                    (a.passed
                      ? "bg-green-500/15 text-green-500"
                      : "bg-fireOragne-500/15 text-fireOragne-400")
                  }
                >
                  {a.passed ? "Položio" : "Pao"}
                </span>
              </td>
              <td className="px-5 py-4 text-right">
                <Link
                  href={`/ispiti/${a.examSlug}/rezultati?attempt=${a.id}`}
                  className="text-md text-green-500 hover:underline"
                >
                  Detalji →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
