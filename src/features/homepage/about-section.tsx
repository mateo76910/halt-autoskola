import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TwoColumnSection } from "@/components/ui/two-column-section";

export function AboutSection() {
  return (
    <>
      <TwoColumnSection label="O AUTOŠKOLI">
        <p className="text-xl leading-7 text-white-300">
          Autoškola Igor Halt nije obična autoškola. Više od dva desetljeća
          radim s polaznicima svih dobi i karaktera — od onih koji prvi put
          sjedaju za volan do onih koji žele povratiti samopouzdanje nakon
          duge pauze. Sve što radim, radim s mirnoćom i poštovanjem.
        </p>
        <p className="text-xl leading-7 text-white-300">
          Vjerujem da svaki polaznik zaslužuje individualni pristup. Nema
          galame, nema kritiziranja — samo strpljivi rad dok ne dođeš do cilja.
        </p>
        <div>
          <Button
            href="/kontakt"
            roundedIcon
            rightElement={<ArrowUpRight size={16} />}
          >
            Kontakt
          </Button>
        </div>
      </TwoColumnSection>

      <Image
        src="/igor-halt.png"
        alt="Igor Halt"
        width={2000}
        height={1200}
        className="w-full min-h-[420px] object-cover max-h-[56.25rem]"
      />
    </>
  );
}
