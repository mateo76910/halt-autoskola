import { ArrowUpRight, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata = { title: "Pitanja i odgovori" };

const FAQ = [
  {
    q: "Koliko traje obuka?",
    a: "Ako kandidat redovito prati teoriju i vožnje, kompletna obuka može trajati oko 3 mjeseca.",
  },
  {
    q: "Vozi li se često?",
    a: "Da. Zbog manjeg broja kandidata moguće je voziti vrlo često, čak i svaki dan.",
  },
  {
    q: "Dolazite li po kandidate?",
    a: "Da. Po dogovoru dolazim po tebe kod kuće, škole, fakulteta, posla ili druge dogovorene lokacije.",
  },
  {
    q: "Hoću li biti spreman/na?",
    a: "Ako uložiš trud i pratiš proces — da, bit ćeš spreman/na.",
  },
  {
    q: "Što ako me je strah?",
    a: "To je najčešći problem — i rješava se kroz pristup i praksu. Razgovaramo o strahu i radimo s njim postupno.",
  },
  {
    q: "Zašto odabrati mene?",
    a: "Jer dobivaš pristup koji te vodi prema sigurnosti, ne samo prema ispitu. Stvarno razumijevanje vožnje, individualan rad i kontinuitet.",
  },
  {
    q: "Na kojem vozilu se vozi?",
    a: "Vožnja se obavlja na Renault Captur (2025. godište) — modernom vozilu prilagođenom obuci kandidata, s odličnom preglednošću i udobnošću tijekom vožnje.",
  },
  {
    q: "Gdje vozimo?",
    a: "Na području grada i ispitnih ruta.",
  },
  {
    q: "Snimaju li se vožnje?",
    a: "Po potrebi, neke vožnje mogu se snimiti isključivo u edukativne svrhe. Snimke su namijenjene kandidatu kako bi lakše razumio svoju vožnju, prometne situacije i vlastiti napredak. Ne objavljuju se i ne dijele na društvenim mrežama.",
  },
  {
    q: "Što ako padnem?",
    a: "Analiziramo situaciju i nastavljamo s dodatnom pripremom.",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Pitanja i odgovori"
        title="Uklanjamo sumnje"
        icon={<HelpCircle className="h-5 w-5" />}
        description="Najčešća pitanja kandidata — i kratki, iskreni odgovori."
      />

      <Container>
        <div className="pb-20 lg:pb-28 max-w-3xl">
          <Accordion type="multiple" className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 rounded-md border border-green-500/40 bg-green-500/5 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <p className="font-bebas text-2xl text-white-500 uppercase leading-[110%]">
              Imaš još pitanja?
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/kontakt" color="white" variant="outline">
                Javi se
              </Button>
              <Button
                href="/prijavi-se"
                roundedIcon
                rightElement={<ArrowUpRight size={16} />}
              >
                Prijavi se
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
