import {
  ArrowUpRight,
  Camera,
  Car,
  CheckCircle2,
  Eye,
  Gauge,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = { title: "Zašto voziti sa mnom" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Zašto voziti sa mnom"
        title="Razlika između vožnje sa mnom i klasične obuke"
        icon={<ShieldCheck className="h-5 w-5" />}
        description="Mnogi kandidati odvoze sate, ali i dalje nisu sigurni. Razlog nije u broju sati — razlog je u pristupu."
      />

      {/* Problem / Solution */}
      <section className="bg-white-500 text-black-500">
        <Container>
          <div className="py-20 lg:py-28 grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="text-lg leading-6 uppercase text-fireOragne-600">
                Problem
              </span>
              <h2 className="mt-4 font-bebas font-extrabold uppercase text-3xl xl:text-4xl leading-[100%] text-black-500">
                Sati prolaze. Sigurnost ne dolazi.
              </h2>
              <p className="mt-5 text-xl leading-7 text-black-400">
                Većina kandidata odvozi propisani broj sati, a i dalje se za
                volanom osjećaju nesigurno. Zašto? Jer im nitko nije objasnio{" "}
                <span className="text-black-500 font-semibold">
                  kako razmišljati u vožnji.
                </span>
              </p>
            </div>
            <div>
              <span className="text-lg leading-6 uppercase text-green-600">
                Rješenje
              </span>
              <h2 className="mt-4 font-bebas font-extrabold uppercase text-3xl xl:text-4xl leading-[100%] text-black-500">
                Učiš razumijevati, ne napamet.
              </h2>
              <ul className="mt-5 space-y-2 text-xl leading-7 text-black-400">
                {[
                  "zašto nešto radiš",
                  "kada to primijeniti",
                  "kako reagirati u stvarnim situacijama",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Kako izgleda rad */}
      <section>
        <Container>
          <div className="py-20 lg:py-28">
            <SectionLabel>Kako izgleda rad sa mnom</SectionLabel>
            <h2 className="mt-6 font-bebas font-extrabold uppercase text-white-500 text-4xl xl:text-[4rem] leading-[100%] max-w-3xl">
              Bez pritiska. Sa strukturom.
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: Sparkles,
                  title: "Nema pritiska, ima strukture",
                  text: "Opušteno, ali ne nasumično. Svaka vožnja vodi nekamo.",
                },
                {
                  icon: Eye,
                  title: "Nema zbunjujućih uputa",
                  text: "Govori se ljudski, jasno i odmjereno.",
                },
                {
                  icon: Target,
                  title: "Svaka vožnja ima jasan cilj",
                  text: "Znamo što treninguje danas i zašto.",
                },
                {
                  icon: Gauge,
                  title: "Tempo koji ima smisla",
                  text: "Bez forsiranja, ali i bez razvlačenja.",
                },
              ].map((it) => (
                <div
                  key={it.title}
                  className="rounded-md border border-black-400 bg-black-500/30 p-6 hover:border-green-500 transition-colors"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-green-500/15 text-green-500">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-bebas text-2xl uppercase text-white-500 leading-[100%]">
                    {it.title}
                  </p>
                  <p className="mt-2 text-md text-white-300 leading-6">
                    {it.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Snimanje vožnje */}
      <section>
        <Container>
          <div className="py-16 lg:py-24">
            <div className="rounded-md border border-black-400 bg-black-500/30 p-8 lg:p-12 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 flex flex-col gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500/15 text-green-500">
                  <Camera className="h-6 w-6" />
                </span>
                <SectionLabel>Po želji</SectionLabel>
                <h3 className="font-bebas font-extrabold uppercase text-3xl xl:text-4xl leading-[100%] text-white-500">
                  Pregled vlastite vožnje kroz snimke
                </h3>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-4 text-lg leading-7 text-white-300">
                <p>
                  Po želji kandidata, vožnja se može i snimiti — isključivo u
                  svrhu učenja i napretka.
                </p>
                <p>
                  <span className="text-white-500 font-semibold">
                    Snimke se ne objavljuju i ne dijele na društvenim mrežama.
                  </span>{" "}
                  Njihova svrha je da kandidat može pogledati svoju vožnju,
                  bolje razumjeti situacije u prometu i jasnije vidjeti gdje
                  može napredovati.
                </p>
                <p>
                  Vrlo često kandidat tek nakon pregleda snimke primijeti stvari
                  koje tijekom same vožnje nije stigao osvijestiti — manje
                  zbunjenosti, više razumijevanja, brže stvaranje sigurnosti.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Renault Captur */}
      <section className="bg-white-500 text-black-500">
        <Container>
          <div className="py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500/15 text-green-600">
                <Car className="h-6 w-6" />
              </span>
              <span className="mt-6 block text-lg leading-6 uppercase text-black-200">
                Vozilo
              </span>
              <h3 className="mt-3 font-bebas font-extrabold uppercase text-3xl xl:text-[3.5rem] leading-[100%] text-black-500">
                Vozi na novom vozilu koje uljeva sigurnost
              </h3>
              <p className="mt-6 text-xl leading-7 text-black-400">
                Praktična obuka odvija se na vozilu{" "}
                <span className="text-black-500 font-semibold">
                  Renault Captur (2025.)
                </span>{" "}
                — modernom, preglednom i udobnom vozilu koje kandidatu od prvog
                sata daje osjećaj sigurnosti i kontrole.
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-md uppercase tracking-wider text-black-200 mb-4">
                Zašto je to važno
              </p>
              <ul className="space-y-3 text-lg leading-7 text-black-400">
                {[
                  "lakše snalaženje u prometu",
                  "bolja preglednost tijekom vožnje",
                  "ugodan osjećaj za volanom",
                  "više samopouzdanja već od prvih sati",
                  "moderno vozilo prilagođeno današnjoj vožnji",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg leading-7 text-black-400 max-w-xl">
                Mnogi kandidati imaju tremu kad prvi put sjednu za volan. Velika
                je razlika kada učenje započneš u{" "}
                <span className="text-black-500 font-semibold">
                  novom i sigurnom vozilu u kojem se osjećaš opuštenije.
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why different */}
      <section>
        <Container>
          <div className="py-20 lg:py-28">
            <SectionLabel>Zašto je ovo drugačije</SectionLabel>
            <h2 className="mt-6 font-bebas font-extrabold uppercase text-white-500 text-4xl xl:text-[4rem] leading-[100%] max-w-3xl">
              Ne radim s velikim brojem kandidata.
            </h2>
            <p className="mt-6 text-xl leading-7 text-white-300 max-w-2xl">
              Radim s onima koji žele kvalitetu i sigurnost. Zato imaš:
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                "više fokusa",
                "vožnje gotovo svaki dan",
                "kontinuirani napredak",
                "brži završetak obuke",
                "stvarno razumijevanje vožnje",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-md border border-black-400 bg-black-500/30 p-5 flex flex-col gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <p className="font-bebas text-xl uppercase text-white-500 leading-[110%]">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Surova istina */}
      <section className="bg-white-500 text-black-500">
        <Container>
          <div className="py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-lg leading-6 uppercase text-black-200">
                Realnost koju već znaš
              </span>
            </div>
            <div className="lg:col-span-8 max-w-3xl">
              <p className="font-bebas font-extrabold uppercase text-3xl xl:text-[3.5rem] leading-[100%] text-black-500">
                Nije stvar samo u cijeni.
              </p>
              <p className="mt-3 font-bebas font-extrabold uppercase text-3xl xl:text-[3.5rem] leading-[100%] text-green-600">
                Nego u tome tko te uči.
              </p>
              <p className="mt-8 text-xl leading-7 text-black-400">
                Uvijek postoji netko tko to radi jeftinije. Ali pitanje je —{" "}
                <span className="text-black-500 font-semibold">
                  hoćeš li nakon toga stvarno biti siguran u prometu?
                </span>
              </p>
              <p className="mt-4 text-xl leading-7 text-black-400">
                Vožnja nije trošak. To je vještina koju nosiš cijeli život.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Surova istina dark */}
      <section>
        <Container>
          <div className="py-20 lg:py-28 max-w-3xl">
            <SectionLabel>Surova istina</SectionLabel>
            <p className="mt-6 font-bebas font-extrabold uppercase text-white-500 text-3xl xl:text-[3rem] leading-[100%]">
              Ne postoji instruktor koji može garantirati prolaz.
            </p>
            <p className="mt-6 text-xl leading-7 text-white-300">
              Ali postoji pristup koji te može učiniti{" "}
              <span className="text-green-500 font-semibold">spremnim.</span> To
              je ono što ovdje dobivaš.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container>
          <div className="py-16 lg:py-20 flex flex-col items-start gap-6">
            <p className="font-bebas font-extrabold uppercase text-white-500 text-3xl xl:text-4xl leading-[100%] max-w-2xl">
              Ako želiš stvarnu promjenu u vožnji,
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
