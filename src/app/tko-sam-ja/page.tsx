import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  Quote,
  Sparkles,
  User,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = { title: "Tko sam ja" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Tko sam ja"
        title="Iskustvo koje čini razliku"
        icon={<User className="h-5 w-5" />}
        description="20+ godina rada s kandidatima — od onih koji prvi put sjedaju za volan do onih koji su već imali strah ili loše iskustvo."
      />

      {/* Bio bloks */}
      <section>
        <Container>
          <div className="py-12 lg:py-20 grid lg:grid-cols-2 gap-6">
            <div className="rounded-md border border-black-400 bg-black-500/30 p-8 lg:p-10 flex flex-col gap-5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500/15 text-green-500">
                <Award className="h-6 w-6" />
              </span>
              <span className="text-xs uppercase tracking-wider text-white-00">
                Blok 1
              </span>
              <p className="font-bebas text-2xl text-white-500 uppercase leading-[110%]">
                Više od 20 godina iskustva u obuci vozača
              </p>
              <p className="text-lg leading-7 text-white-300">
                Kroz to vrijeme radio sam s velikim brojem kandidata — od onih
                koji prvi put sjedaju za volan do onih koji su već imali strah
                ili loše iskustvo.
              </p>
              <p className="text-lg leading-7 text-white-300">
                Po struci sam{" "}
                <span className="text-white-500 font-semibold">
                  mag. oec. i ing. traff.
                </span>
                , a u radu objedinjujem više uloga: voditelj autoškole,
                predavač i instruktor.
              </p>
            </div>

            <div className="rounded-md border border-green-500/40 bg-green-500/5 p-8 lg:p-10 flex flex-col gap-5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500 text-black-500">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span className="text-xs uppercase tracking-wider text-white-00">
                Blok 2
              </span>
              <p className="font-bebas text-2xl text-white-500 uppercase leading-[110%]">
                Razumijem cijeli proces — od teorije do vožnje
              </p>
              <p className="text-lg leading-7 text-white-300">
                Kroz rad s kandidatima shvatio sam jednu stvar:
              </p>
              <p className="text-lg leading-7 text-white-300">
                <span className="text-white-500 font-semibold">
                  Ljudi ne trebaju više kritike.
                </span>{" "}
                Trebaju nekoga tko će im objasniti, pokazati i dati sigurnost.
              </p>
              <div className="rounded-md bg-black-500/40 p-5 border border-black-400">
                <p className="text-md text-fireOragne-400 line-through">
                  „Vozi i snađi se.“
                </p>
                <p className="mt-2 font-bebas text-xl text-green-500 uppercase">
                  „Razumij, uvježbaj, postani siguran.“
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Što možeš očekivati */}
      <section className="bg-white-500 text-black-500">
        <Container>
          <div className="py-20 lg:py-28">
            <span className="text-lg leading-6 uppercase text-black-200">
              Što možeš očekivati od mene
            </span>
            <h2 className="mt-6 font-bebas font-extrabold uppercase text-black-500 text-4xl xl:text-[4rem] leading-[100%] max-w-3xl">
              Pristup koji daje rezultat
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Sparkles, t: "smiren pristup" },
                { icon: MessageCircle, t: "jasnu komunikaciju" },
                { icon: CheckCircle2, t: "strpljenje" },
                { icon: Zap, t: "fokus na tvoj napredak" },
              ].map((it) => (
                <div
                  key={it.t}
                  className="rounded-md border border-black-00 bg-white-300 p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-green-500/15 text-green-600">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-bebas text-2xl text-black-500 uppercase leading-[100%]">
                    {it.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Zašto to radim */}
      <section>
        <Container>
          <div className="py-20 lg:py-28">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-green-500/15 text-green-500">
                <Zap className="h-5 w-5" />
              </span>
              <SectionLabel>Zašto to radim</SectionLabel>
            </div>

            <h2 className="mt-6 font-bebas font-extrabold uppercase text-white-500 text-4xl xl:text-[4rem] leading-[100%] max-w-3xl">
              Ne radim ovo da bi netko samo završio obuku
            </h2>

            <div className="mt-12 grid lg:grid-cols-3 gap-4">
              {[
                {
                  step: "Na početku",
                  quote: "„Najviše me bilo strah vožnje u prometu.“",
                  text: "I to je potpuno normalno. Prvih nekoliko vožnji su nesigurne, pune pitanja i često uz malo treme.",
                  tone: "neutral",
                },
                {
                  step: "Nakon nekog vremena",
                  quote: "„Zapravo mi ovo ide.“",
                  text: "Tu se događa preokret. Sigurnost počinje rasti, a tijelo počinje pamtiti.",
                  tone: "neutral",
                },
                {
                  step: "Pred kraj",
                  quote: "„Sad se osjećam sigurno.“",
                  text: "Spreman si. Ne samo za ispit — nego za cestu. To je jedino što je važno.",
                  tone: "success",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className={
                    "rounded-md border p-6 flex flex-col gap-4 " +
                    (s.tone === "success"
                      ? "border-green-500/40 bg-green-500/5"
                      : "border-black-400 bg-black-500/30")
                  }
                >
                  <span className="text-xs uppercase tracking-wider text-white-00">
                    {s.step}
                  </span>
                  <div className="flex gap-2">
                    <Quote className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="font-bebas text-xl text-white-500 uppercase leading-[110%]">
                      {s.quote}
                    </p>
                  </div>
                  <p className="text-md leading-6 text-white-300">{s.text}</p>
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
              Ako želiš takvo iskustvo,
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
