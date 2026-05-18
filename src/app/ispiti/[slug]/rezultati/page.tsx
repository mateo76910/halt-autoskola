import { notFound } from "next/navigation";
import { getAllExams, getExamBySlug } from "@/data/exams";
import { ResultsView } from "./results-view";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllExams().map((e) => ({ slug: e.slug }));
}

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { attempt?: string };
}) {
  const exam = getExamBySlug(params.slug);
  if (!exam) return notFound();
  return <ResultsView exam={exam} attemptId={searchParams.attempt} />;
}
