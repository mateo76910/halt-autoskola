import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function MissionSection() {
  return (
    <section className="relative">
      <Container>
        <div className="relative py-24 lg:py-[12.5rem] flex flex-col lg:flex-row lg:justify-between lg:gap-16 xl:gap-36">
          <SectionLabel className="flex-shrink-0">MISIJA</SectionLabel>
          <div className="max-w-[42rem] mt-6 lg:mt-0 flex flex-col gap-6">
            <p className="text-xl leading-7 text-white-300">
              Moja misija je jednostavna — pomoći što više ljudi da postanu
              sigurni, samosvjesni i odgovorni vozači. Svaka osoba ima svoj
              tempo, svoje strahove i svoja prethodna iskustva, a moj posao je
              prilagoditi se tome.
            </p>
            <p className="text-xl leading-7 text-white-300">
              Vjerujem da nakon završene autoškole svatko treba znati ne samo
              proći ispit, nego i samostalno se osjećati u stvarnom prometu.
            </p>
          </div>
          <Image
            src="/mission-and-vision.png"
            alt="Misija i vizija"
            width={400}
            height={300}
            className="mt-24 xl:mt-0 xl:absolute z-10 xl:-bottom-16 xl:right-0 xl:w-[315px]"
          />
        </div>
      </Container>
    </section>
  );
}
