import {
  ArrowUpRight,
  Car,
  CheckCircle2,
  Clock,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = { title: "Prijavi se" };

const WANT = [
  "sigurnost",
  "jasnoću",
  "stvarno razumijevanje vožnje",
  "brzu i organiziranu obuku",
];

const PERKS = [
  { icon: Clock, t: "Odgovaram brzo" },
  { icon: Rocket, t: "Krećeš bez nepotrebnog čekanja" },
  { icon: Car, t: "Dolazim po tebe na vožnju" },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Prijavi se"
        title="Vrijeme je da sjedneš za volan bez straha"
        icon={<Rocket className="h-5 w-5" />}
        description="Radim s ograničenim brojem kandidata kako bih svakome mogao posvetiti pažnju. Popuni formu — javit ću ti se u najkraćem roku."
      />

      <Container>
        <div className="pb-20 lg:pb-32 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionLabel>Ako želiš</SectionLabel>
            <ul className="mt-6 space-y-3">
              {WANT.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 text-xl text-white-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-bebas text-2xl text-white-500 uppercase leading-[110%] max-w-md">
              … onda si na pravom mjestu.
            </p>

            <div className="mt-12 rounded-md border border-green-500/40 bg-green-500/5 p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-green-500" />
                <p className="text-md uppercase tracking-wider text-white-00">
                  Što dobivaš
                </p>
              </div>
              <ul className="mt-4 space-y-3">
                {PERKS.map((p) => (
                  <li
                    key={p.t}
                    className="flex items-center gap-3 text-lg text-white-500"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-green-500/15 text-green-500">
                      <p.icon className="h-4 w-4" />
                    </span>
                    {p.t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-md border border-black-400 bg-black-500/30 p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-green-500 text-black-500">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <p className="font-bebas text-2xl text-white-500 uppercase">
                  Upiši se kod mene
                </p>
              </div>
              <p className="mt-3 text-md text-white-300">
                Javit ću ti se u roku 24h radnim danom.
              </p>
              <div className="mt-8">
                <ContactForm subjectDefault="Upis u autoškolu" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
