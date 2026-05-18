import { ArrowUpRight, Clock, ListChecks, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { getAllExams } from "@/data/exams";

export const metadata = { title: "Ispiti" };

export default function Page() {
  const exams = getAllExams();

  return (
    <Container>
      <div className="py-16 lg:py-32 pb-24 lg:pb-[12.5rem]">
        <SectionLabel>ISPITI</SectionLabel>
        <h1 className="mt-6 text-[9vw] leading-none sm:text-[3rem] 2xl:text-[5rem] font-bebas font-extrabold text-white-500 uppercase">
          Provjeri se kao na pravom ispitu
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-7 text-white-300">
          Odaberi ispit, riješi ga u zadanom vremenu i pregledaj detaljnu
          analizu rezultata. Svaki ispit ima realnu vremensku granicu.
        </p>

        <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <article
              key={exam.id}
              className="group relative flex flex-col rounded-md border border-black-400 hover:border-green-500 bg-black-500/30 backdrop-blur-sm transition-colors p-6"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full px-3 py-1 text-xs uppercase tracking-wider bg-green-500/15 text-green-500">
                  {exam.category}
                </span>
                <span className="rounded-full px-3 py-1 text-xs uppercase tracking-wider bg-white-500/10 text-white-300">
                  {exam.validationMode === "instant" ? "Vježba" : "Ispit"}
                </span>
              </div>
              <h2 className="mt-5 font-bebas font-extrabold text-3xl leading-[100%] text-white-500 uppercase">
                {exam.title}
              </h2>
              <p className="mt-3 text-md leading-5 text-white-300 line-clamp-3">
                {exam.description}
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-black-400 pt-5">
                <Meta
                  icon={<ListChecks className="h-4 w-4 text-green-500" />}
                  label="Pitanja"
                  value={String(exam.questions.length)}
                />
                <Meta
                  icon={<Clock className="h-4 w-4 text-green-500" />}
                  label="Vrijeme"
                  value={`${exam.initialTimeMinutes}m`}
                />
                <Meta
                  icon={<Target className="h-4 w-4 text-green-500" />}
                  label="Za prolaz"
                  value={`${exam.pointsToPass} b.`}
                />
              </dl>

              <div className="mt-6">
                <Button
                  href={`/ispiti/${exam.slug}`}
                  roundedIcon
                  rightElement={<ArrowUpRight size={16} />}
                >
                  Otvori ispit
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}

function Meta({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-xs uppercase tracking-wider text-white-00">
          {label}
        </span>
      </div>
      <p className="mt-0.5 font-bebas text-xl text-white-500">{value}</p>
    </div>
  );
}
