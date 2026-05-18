import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { HistoryView } from "./history-view";

export const metadata = { title: "Povijest" };

export default function Page() {
  return (
    <Container>
      <div className="py-16 lg:py-24 max-w-5xl">
        <SectionLabel>Račun</SectionLabel>
        <h1 className="mt-5 text-[9vw] leading-none sm:text-[3rem] 2xl:text-[4rem] font-bebas font-extrabold text-white-500 uppercase">
          Povijest pokušaja
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white-300">
          Sve tvoje ispite, rezultate i kad si ih rješavao.
        </p>
        <div className="mt-12">
          <HistoryView />
        </div>
      </div>
    </Container>
  );
}
