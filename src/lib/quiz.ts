import type { ExamAttempt, Question, UserAnswer } from "@/types/exam";

export function emptyAnswer(): UserAnswer {
  return {
    selectedOptions: [],
    numberAnswer: "",
    pointsEarned: 0,
    isCorrect: false,
    answered: false,
  };
}

export function gradeAnswer(question: Question, answer: UserAnswer) {
  let isCorrect = false;

  if (question.type === "CHECKBOX") {
    const correctIdx = question.answers
      .map((a, i) => (a.isCorrect ? i : -1))
      .filter((i) => i !== -1);
    const selected = answer.selectedOptions;
    isCorrect =
      selected.length === correctIdx.length &&
      correctIdx.every((i) => selected.includes(i));
  } else if (question.type === "NUMBER") {
    const correct = question.answers[0]?.title?.trim().toLowerCase() ?? "";
    isCorrect = answer.numberAnswer.trim().toLowerCase() === correct;
  }

  const pointsEarned = isCorrect ? question.points : 0;
  const failedElimination = !!question.isElimination && !isCorrect;
  return { isCorrect, pointsEarned, failedElimination };
}

export function buildAttempt(args: {
  examId: string;
  examSlug: string;
  examTitle: string;
  startedAt: Date;
  finishedAt: Date;
  questions: Question[];
  answers: UserAnswer[];
  pointsToPass: number;
}): ExamAttempt {
  const { examId, examSlug, examTitle, startedAt, finishedAt, questions, answers, pointsToPass } =
    args;
  const maxScore = questions.reduce((a, q) => a + q.points, 0);
  const totalScore = answers.reduce((a, ans) => a + ans.pointsEarned, 0);
  const failedDueToElimination = questions.some(
    (q, i) => q.isElimination && !answers[i].isCorrect,
  );
  const passed = !failedDueToElimination && totalScore >= pointsToPass;

  return {
    id: cryptoId(),
    examId,
    examSlug,
    examTitle,
    startedAt: startedAt.toISOString(),
    finishedAt: finishedAt.toISOString(),
    durationSeconds: Math.round(
      (finishedAt.getTime() - startedAt.getTime()) / 1000,
    ),
    totalScore,
    maxScore,
    pointsToPass,
    passed,
    failedDueToElimination,
    answers: questions.map((q, i) => ({
      questionId: q.id,
      questionTitle: q.title,
      selectedOptions: answers[i].selectedOptions,
      numberAnswer: answers[i].numberAnswer,
      isCorrect: answers[i].isCorrect,
      pointsEarned: answers[i].pointsEarned,
    })),
  };
}

function cryptoId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

const STORAGE_KEY = "halt:attempts";

export function saveAttemptLocal(attempt: ExamAttempt) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: ExamAttempt[] = raw ? JSON.parse(raw) : [];
    list.unshift(attempt);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
  } catch {}
}

export function getAttemptsLocal(): ExamAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ExamAttempt[]) : [];
  } catch {
    return [];
  }
}

export function getAttemptByIdLocal(id: string): ExamAttempt | undefined {
  return getAttemptsLocal().find((a) => a.id === id);
}

export function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
