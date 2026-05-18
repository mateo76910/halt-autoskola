import {
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  Brain,
  ClipboardCheck,
  Map,
  Route,
  Smile,
  Wind,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = { title: "Kako do vozačke" };

const STEPS = [
  {
    icon: ClipboardCheck,
    label: "Korak 1",
    title: "Prijava",
    text: "Jednostavno i brzo. Razgovaramo o tvojim ciljevima i terminima.",
  },
  {
    icon: BookOpen,
    label: "Korak 2",
    title: "Teorija",
    text: "Razumijevanje pravila — ne učenje napamet. Online vježba pitanja uz autoškolu.",
  },
  {
    icon: Route,
    label: "Korak 3",
    title: "Vožnja",
    text: "Stvaranje sigurnosti, korak po korak. Realne situacije iz prometa.",
  },
  {
    icon: Smile,
    label: "Korak 4",
    title: "Ispit",
    text: "Dolaziš spreman/na. Ne kao iznenađenje, nego kao logična završnica.",
  },
];

const PITFALLS = [
  {
    icon: Brain,
    title: "Pokušavaju sve zapamtiti",
    text: "Vožnja nije test pamćenja. Mehaničko ponavljanje ne stvara sigurnost.",
  },
  {
    icon: AlertTriangle,
    title: "Ignoriraju strah",
    text: "Strah ne nestaje sam. Razgovaramo o njemu i radimo s njim, ne protiv njega.",
  },
  {
    icon: Wind,
    title: "Ne razvijaju osjećaj za promet",
    text: "Bez osjećaja se vozi tehnički. S osjećajem se vozi sigurno.",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Kako do vozačke"
        title="Put do vozačke — bez kaosa i nesigurnosti"
        icon={<Map className="h-5 w-5" />}
        description="Jasno i smirujuće. Četiri koraka koji čine razliku između „položio sam“ i „znam voziti“."
      />

      {/* Steps */}
      <section>
        <Container>
          <div className="py-12 lg:py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className="relative rounded-md border border-black-400 bg-black-500/30 p-6 hover:border-green-500 transition-colors"
                >
                  <span className="absolute top-4 right-4 font-bebas text-[80px] leading-none text-green-500/15">
                    {i + 1}
                  </span>
                  <span className="relative grid h-12 w-12 place-items-center rounded-full bg-green-500/15 text-green-500">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-xs uppercase tracking-wider text-white-00">
                    {s.label}
                  </p>
                  <p className="mt-2 font-bebas text-3xl text-white-500 uppercase leading-[100%]">
                    {s.title}
                  </p>
                  <p className="mt-3 text-md text-white-300 leading-6">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Najvažnije */}
      <section className="bg-white-500 text-black-500">
        <Container>
          <div className="py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="text-lg leading-6 uppercase text-black-200">
                Najvažnije
              </span>
              <h2 className="mt-4 font-bebas font-extrabold uppercase text-3xl xl:text-[3.5rem] leading-[100%] text-black-500">
                Vožnja nije test pamćenja
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-2xl">
              <p className="text-xl leading-7 text-black-400">
                To je kombinacija tri stvari koje se grade istovremeno:
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {["razumijevanja", "prakse", "smirenosti"].map((t) => (
                  <div
                    key={t}
                    className="rounded-md bg-white-300 border border-black-00 p-5 text-center"
                  >
                    <p className="font-bebas text-2xl text-black-500 uppercase leading-[100%]">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pitfalls */}
      <section>
        <Container>
          <div className="py-20 lg:py-28">
            <SectionLabel>Što ljudi najčešće krivo rade</SectionLabel>
            <h2 className="mt-6 font-bebas font-extrabold uppercase text-white-500 text-4xl xl:text-[4rem] leading-[100%] max-w-3xl">
              Tri zamke koje produžuju put do sigurnosti
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-4">
              {PITFALLS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-md border border-fireOragne-500/30 bg-fireOragne-500/5 p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-fireOragne-500/20 text-fireOragne-400">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-bebas text-2xl text-white-500 uppercase leading-[100%]">
                    {p.title}
                  </p>
                  <p className="mt-2 text-md text-white-300 leading-6">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container>
          <div className="py-16 lg:py-20 flex flex-col items-start gap-6">
            <p className="font-bebas font-extrabold uppercase text-white-500 text-3xl xl:text-4xl leading-[100%] max-w-2xl">
              Želiš vodstvo kroz svaki korak?
            </p>
            <Button
              href="/prijavi-se"
              roundedIcon
              rightElement={<ArrowUpRight size={16} />}
            >
              Upiši se kod mene
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
