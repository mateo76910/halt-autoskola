import type { ExamAttempt } from "@/types/exam";
import { getSupabaseBrowserClient } from "./client";

export async function persistAttempt(attempt: ExamAttempt) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return { ok: false, reason: "no-supabase" as const };
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  if (!user) return { ok: false, reason: "no-user" as const };

  const { error } = await supabase.from("exam_attempts").insert({
    id: attempt.id,
    user_id: user.id,
    exam_id: attempt.examId,
    exam_slug: attempt.examSlug,
    exam_title: attempt.examTitle,
    started_at: attempt.startedAt,
    finished_at: attempt.finishedAt,
    duration_seconds: attempt.durationSeconds,
    total_score: attempt.totalScore,
    max_score: attempt.maxScore,
    points_to_pass: attempt.pointsToPass,
    passed: attempt.passed,
    failed_due_to_elimination: attempt.failedDueToElimination,
    answers: attempt.answers,
  });

  if (error) return { ok: false, reason: "error" as const, error };
  return { ok: true as const };
}

export async function fetchMyAttempts(): Promise<ExamAttempt[]> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("exam_attempts")
    .select("*")
    .order("finished_at", { ascending: false })
    .limit(100);
  if (error || !data) return [];
  return data.map((row) => ({
    id: row.id,
    examId: row.exam_id,
    examSlug: row.exam_slug,
    examTitle: row.exam_title,
    startedAt: row.started_at,
    finishedAt: row.finished_at,
    durationSeconds: row.duration_seconds,
    totalScore: row.total_score,
    maxScore: row.max_score,
    pointsToPass: row.points_to_pass,
    passed: row.passed,
    failedDueToElimination: row.failed_due_to_elimination,
    answers: row.answers,
  }));
}
