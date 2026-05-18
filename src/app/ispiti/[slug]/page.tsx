import { notFound } from "next/navigation";
import { getAllExams, getExamBySlug } from "@/data/exams";
import { ExamIntro } from "./exam-intro";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllExams().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const exam = getExamBySlug(params.slug);
  return { title: exam ? exam.title : "Ispit" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const exam = getExamBySlug(params.slug);
  if (!exam) return notFound();
  return <ExamIntro exam={exam} />;
}
