import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

const STATS = [
  { value: "20+", label: "GODINA ISKUSTVA" },
  { value: "1000+", label: "POLOŽENIH ISPITA" },
  { value: "98%", label: "PROLAZNOST IZ PRVE" },
  { value: "5★", label: "PROSJEČNA OCJENA" },
];

export function ExamsSection() {
  return (
    <section className="bg-white-500 text-black-500">
      <Container>
        <div className="py-24 lg:py-[12.5rem] flex flex-col lg:flex-row lg:justify-between lg:gap-16 xl:gap-36">
          <SectionLabel tone="light" className="flex-shrink-0">
            ISPITI
          </SectionLabel>
          <div className="max-w-[42rem] mt-6 lg:mt-0 flex flex-col gap-6">
            <p className="text-xl leading-7 text-black-500">
              Vježbaj ispitna pitanja online, kad god ti odgovara. Više od
              tisuću pitanja iz prometnih propisa, prve pomoći i sigurnosti —
              detaljna analiza nakon svakog rješavanja.
            </p>
            <p className="text-xl leading-7 text-black-400">
              Polaznici Igor Halt autoškole imaju neograničen pristup svim
              ispitima u sklopu pilot programa.
            </p>
            <div>
              <Button
                href="/ispiti"
                color="green"
                roundedIcon
                rightElement={<ArrowUpRight size={16} className="text-white-500" />}
                className="text-black-500 hover:text-black-300"
              >
                Pokreni ispit
              </Button>
            </div>
          </div>
        </div>

        <div className="pb-24 lg:pb-[12.5rem]">
          <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-stretch">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={
                  "relative py-8 lg:py-0 flex-1 " +
                  (i < STATS.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-black-00"
                    : "")
                }
              >
                <div className="relative inline-block">
                  <Plus className="absolute -left-8 top-2 h-7 w-7 text-green-500" />
                  <p className="font-bebas text-[64px] sm:text-[88px] leading-[88px] text-black-500">
                    {s.value}
                  </p>
                </div>
                <p className="mt-3 text-md leading-5 text-black-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/exams.png"
          alt="Ispiti"
          width={2000}
          height={1200}
          className="w-full max-h-[37.5rem] object-cover"
        />
      </Container>
    </section>
  );
}
