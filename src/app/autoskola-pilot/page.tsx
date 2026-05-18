import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  Layers,
  MessageCircle,
  Smile,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = { title: "Autoškola Pilot" };

const RECOGNITION = [
  { icon: Layers, t: "kvalitetnoj organizaciji nastave" },
  { icon: Users, t: "profesionalnom pristupu kandidatima" },
  { icon: Smile, t: "ugodnoj i poticajnoj atmosferi" },
  { icon: MessageCircle, t: "jasnoj komunikaciji i podršci" },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Autoškola Pilot"
        title="Sustav koji stoji iza moje obuke"
        icon={<Building2 className="h-5 w-5" />}
        description="Vožnju obavljam u sklopu Autoškole Pilot — moderne i provjerene autoškole s fokusom na kvalitetu i profesionalan pristup kandidatima."
      />

      {/* Prepoznata po */}
      <section className="bg-white-500 text-black-500">
        <Container>
          <div className="py-20 lg:py-28">
            <span className="text-lg leading-6 uppercase text-black-200">
              O autoškoli — prepoznata po
            </span>
            <h2 className="mt-6 font-bebas font-extrabold uppercase text-black-500 text-4xl xl:text-[4rem] leading-[100%] max-w-3xl">
              Što čini Pilot drugačijim
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {RECOGNITION.map((it) => (
                <div
                  key={it.t}
                  className="rounded-md border border-black-00 bg-white-300 p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-green-500/15 text-green-600">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-bebas text-xl text-black-500 uppercase leading-[110%]">
                    {it.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Što to znači za tebe */}
      <section>
        <Container>
          <div className="py-20 lg:py-28">
            <SectionLabel>Što to znači za tebe</SectionLabel>
            <h2 className="mt-6 font-bebas font-extrabold uppercase text-white-500 text-4xl xl:text-[4rem] leading-[100%] max-w-3xl">
              Kvalitetna autoškola + osobni pristup
            </h2>
            <p className="mt-6 text-xl leading-7 text-white-300 max-w-2xl">
              Kombinacija kvalitetne autoškole i individualnog rada sa mnom
              znači da dobivaš:
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {[
                { title: "Stabilan sustav", text: "Provjerena organizacija i administracija." },
                { title: "Jasnu organizaciju", text: "Termini, plan, koraci — sve transparentno." },
                { title: "Osobni pristup u vožnji", text: "Individualna pažnja koju zaslužuješ." },
              ].map((it) => (
                <div
                  key={it.title}
                  className="rounded-md border border-black-400 bg-black-500/30 p-6"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <p className="mt-4 font-bebas text-2xl text-white-500 uppercase leading-[100%]">
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

      {/* Lokacija */}
      <section>
        <Container>
          <div className="py-16 lg:py-24">
            <div className="rounded-md border border-black-400 bg-black-500/30 p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500/15 text-green-500">
                  <Compass className="h-6 w-6" />
                </span>
                <SectionLabel className="mt-5 block">Lokacija</SectionLabel>
                <h3 className="mt-3 font-bebas font-extrabold uppercase text-3xl xl:text-4xl leading-[100%] text-white-500">
                  Više lokacija, više fleksibilnosti
                </h3>
              </div>
              <div className="lg:col-span-7 text-lg leading-7 text-white-300">
                <p>
                  Autoškola Pilot djeluje na više lokacija, što omogućuje
                  fleksibilnost i lakši pristup kandidatima.
                </p>
                <p className="mt-4 text-md text-white-00 italic">
                  Konkretne adrese šaljem po prijavi.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Prijelaz */}
      <section className="bg-white-500 text-black-500">
        <Container>
          <div className="py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-lg leading-6 uppercase text-black-200">
                Bitno
              </span>
            </div>
            <div className="lg:col-span-8 max-w-3xl">
              <p className="font-bebas font-extrabold uppercase text-3xl xl:text-[3.5rem] leading-[100%] text-black-500">
                Autoškola je temelj.
              </p>
              <p className="mt-3 font-bebas font-extrabold uppercase text-3xl xl:text-[3.5rem] leading-[100%] text-green-600">
                Iskustvo ovisi o instruktoru.
              </p>
              <p className="mt-8 text-xl leading-7 text-black-400">
                Zato, ako želiš individualan pristup i sigurnost u vožnji —
                upiši se kod mene.
              </p>
              <div className="mt-8">
                <Button
                  href="/prijavi-se"
                  roundedIcon
                  rightElement={<ArrowUpRight size={16} />}
                  className="border-black-500 text-black-500 hover:text-black-300 hover:border-black-300"
                >
                  Upiši se kod mene
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
