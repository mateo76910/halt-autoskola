import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock,
  GraduationCap,
  Heart,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Realnost />
      <ZaKogaJe />
      <StoOcekivati />
      <MiniCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative z-10">
      <Container>
        <div className="pt-8 pb-20 lg:pt-16 lg:pb-32 max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-green-500/15 text-green-500">
              <Car className="h-5 w-5" />
            </span>
            <SectionLabel>Igor Halt · Autoškola Pilot</SectionLabel>
          </div>

          <h1 className="mt-8 font-bebas font-extrabold text-white-500 uppercase leading-[95%] text-[12vw] sm:text-[5rem] xl:text-[7.5rem]">
            Do vozačke za oko<br />
            <span className="text-green-500">3 mjeseca.</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl leading-7 md:leading-8 text-white-300 max-w-3xl">
            Vožnje svaki dan, na koje{" "}
            <span className="text-white-500 font-semibold">dolazim po tebe.</span>{" "}
            Ako želiš voziti sigurno i bez panike — ne samo za ispit, nego za
            stvarni život — ovdje počinje tvoja promjena.
          </p>

          <p className="mt-6 text-lg leading-7 text-white-300 max-w-2xl">
            Ne učim te samo kako položiti.{" "}
            <span className="text-white-500">
              Učim te kako se osjećati mirno, sigurno i spremno u stvarnom prometu.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              href="/prijavi-se"
              roundedIcon
              rightElement={<ArrowUpRight size={16} />}
            >
              Upiši se kod mene
            </Button>
            <Link
              href="/zasto-voziti"
              className="inline-flex items-center gap-1 text-lg text-white-300 hover:text-white-500 transition-colors"
            >
              Saznaj zašto <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 text-md text-white-300">
            <TrustBit icon={Clock}>20+ godina iskustva</TrustBit>
            <TrustBit icon={Car}>Renault Captur 2025.</TrustBit>
            <TrustBit icon={Calendar}>Vožnje gotovo svaki dan</TrustBit>
            <TrustBit icon={Heart}>Dolazim po tebe</TrustBit>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustBit({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <Icon className="h-4 w-4 text-green-500" />
      {children}
    </span>
  );
}

function Realnost() {
  return (
    <section className="bg-white-500 text-black-500">
      <Container>
        <div className="py-20 lg:py-32 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="text-lg leading-6 uppercase text-black-200">
              Realnost
            </span>
          </div>
          <div className="lg:col-span-8">
            <p className="font-bebas font-extrabold uppercase text-3xl xl:text-[3.5rem] leading-[100%] text-black-500">
              Većina kandidata se ne boji vožnje.
            </p>
            <p className="mt-4 font-bebas font-extrabold uppercase text-3xl xl:text-[3.5rem] leading-[100%] text-green-600">
              Boji se nesigurnosti.
            </p>
            <p className="mt-8 text-xl leading-7 text-black-400 max-w-2xl">
              Pogrešaka. Osjećaja da „nije dovoljno dobra“. To je{" "}
              <span className="text-black-500 font-semibold">normalno.</span> Ali
              uz pravi pristup — to se mijenja.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ZaKogaJe() {
  return (
    <section>
      <Container>
        <div className="py-20 lg:py-32">
          <SectionLabel>Za koga je ovo</SectionLabel>
          <h2 className="mt-6 font-bebas font-extrabold uppercase text-white-500 text-4xl xl:text-[4rem] leading-[100%] max-w-3xl">
            Provjeri jesi li na pravom mjestu
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="rounded-md border border-green-500/40 bg-green-500/5 p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-green-500 text-black-500">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <p className="font-bebas text-2xl text-white-500 uppercase">
                  Ovo je za tebe ako
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-lg text-white-300 leading-7">
                {[
                  "želiš naučiti voziti bez straha",
                  "želiš razumjeti što radiš, a ne samo odraditi sate",
                  "želiš sigurnost i kontrolu u vožnji",
                  "želiš instruktora koji ti se stvarno posveti",
                  "želiš obuku bez razvlačenja",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md border border-fireOragne-500/30 bg-fireOragne-500/5 p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-fireOragne-500 text-white-500">
                  <XCircle className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <p className="font-bebas text-2xl text-white-500 uppercase">
                  Ovo nije za tebe ako
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-lg text-white-300 leading-7">
                {[
                  "tražiš najjeftiniju opciju",
                  "želiš samo „odvoziti“ bez razumijevanja",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-fireOragne-400 mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StoOcekivati() {
  const items = [
    {
      icon: GraduationCap,
      title: "Jasan i strukturiran pristup",
      text: "Svaka vožnja ima cilj. Nema lutanja niti slijeganja ramena.",
    },
    {
      icon: Heart,
      title: "Strpljenje i podršku",
      text: "Bez vike, bez podsmijeha. Odraslo i opušteno, korak po korak.",
    },
    {
      icon: ShieldCheck,
      title: "Realne situacije iz prometa",
      text: "Ne treniramo samo ispit. Treniramo stvarnu cestu na kojoj ćeš biti.",
    },
    {
      icon: Sparkles,
      title: "Postupno građenje sigurnosti",
      text: "Sigurnost ne dolazi odjednom. Dolazi kroz strukturu i ponavljanje.",
    },
    {
      icon: Car,
      title: "Renault Captur 2025.",
      text: "Moderno, pregledno i udobno vozilo. Već od prvog sata.",
    },
    {
      icon: Calendar,
      title: "Vožnje svaki dan",
      text: "Kontinuitet ubrzava napredak. Dolazim po tebe na lokaciju.",
    },
  ];
  return (
    <section className="bg-white-500 text-black-500">
      <Container>
        <div className="py-20 lg:py-32">
          <span className="text-lg leading-6 uppercase text-black-200">
            Što možeš očekivati
          </span>
          <h2 className="mt-6 font-bebas font-extrabold uppercase text-black-500 text-4xl xl:text-[4rem] leading-[100%] max-w-3xl">
            Tvoja obuka, na ozbiljnoj razini
          </h2>

          <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {items.map((it) => (
              <div
                key={it.title}
                className="rounded-md border border-black-00 bg-white-300 p-6 hover:border-green-500 transition-colors"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-green-500/15 text-green-600">
                  <it.icon className="h-5 w-5" />
                </span>
                <p className="mt-5 font-bebas text-2xl text-black-500 uppercase leading-[100%]">
                  {it.title}
                </p>
                <p className="mt-2 text-md text-black-300 leading-6">
                  {it.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xl text-black-400 leading-7 max-w-2xl">
            Kompletna obuka od upisa do vozačke —{" "}
            <span className="text-black-500 font-semibold">
              za otprilike 3 mjeseca.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}

function MiniCta() {
  return (
    <section>
      <Container>
        <div className="py-20 lg:py-28">
          <div className="rounded-md border border-green-500/40 bg-green-500/5 p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="font-bebas font-extrabold uppercase text-white-500 text-3xl xl:text-[3rem] leading-[100%]">
                Ako želiš tu sigurnost —
              </p>
              <p className="mt-2 font-bebas font-extrabold uppercase text-green-500 text-3xl xl:text-[3rem] leading-[100%]">
                upiši se kod mene
              </p>
            </div>
            <Button
              href="/prijavi-se"
              roundedIcon
              rightElement={<ArrowUpRight size={16} />}
            >
              Upiši se kod mene
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
