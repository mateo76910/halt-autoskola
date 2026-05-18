import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HomepageHero() {
  return (
    <section className="relative z-10">
      <Container>
        <div className="relative">
          <Image
            src="/homepage-hero.png"
            alt="Učenje vožnje"
            width={2000}
            height={1200}
            priority
            className="w-full h-auto object-cover rounded-md min-h-96 md:min-h-0"
          />
          <h1 className="absolute left-1/2 top-[100%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center font-bebas font-extrabold uppercase text-white-500 text-[7vw] 3xl:text-[126px] leading-[100%] whitespace-pre-line px-4">
            {"UČENJE VOŽNJE\nBEZ PREDRASUDA"}
          </h1>
        </div>

        <div className="flex flex-col items-center text-center gap-6 pt-28 md:pt-40">
          <p className="text-md leading-5 md:text-lg md:leading-6 text-white-500 max-w-2xl px-4">
            Otkrij autoškolu drugačiju od svih ostalih — bez pritiska, bez
            predrasuda, s instruktorom koji prepoznaje tvoj tempo. Učenje vožnje
            može biti opušteno i lijepo iskustvo.
          </p>
          <Button
            href="/upisi-se"
            roundedIcon
            rightElement={<ArrowUpRight size={16} />}
          >
            Upiši se
          </Button>
        </div>
      </Container>
    </section>
  );
}
