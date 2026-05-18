export type AnswerOption = {
  title: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  title: string;
  type: "CHECKBOX" | "NUMBER";
  image?: string;
  points: number;
  isElimination?: boolean;
  measurementUnit?: string;
  answers: AnswerOption[];
};

export type ValidationMode = "instant" | "end";

export type Exam = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  pointsToPass: number;
  initialTimeMinutes: number;
  validationMode: ValidationMode;
  questions: Question[];
};

export type UserAnswer = {
  selectedOptions: number[];
  numberAnswer: string;
  pointsEarned: number;
  isCorrect: boolean;
  answered: boolean;
};

export type ExamAttempt = {
  id: string;
  examId: string;
  examTitle: string;
  examSlug: string;
  startedAt: string;
  finishedAt: string;
  durationSeconds: number;
  totalScore: number;
  maxScore: number;
  pointsToPass: number;
  passed: boolean;
  failedDueToElimination: boolean;
  answers: {
    questionId: string;
    questionTitle: string;
    selectedOptions: number[];
    numberAnswer: string;
    isCorrect: boolean;
    pointsEarned: number;
  }[];
};
