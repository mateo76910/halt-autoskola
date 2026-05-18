import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { ProfileSummary } from "./profile-summary";

export const metadata = { title: "Profil" };

export default function Page() {
  return (
    <Container>
      <div className="py-16 lg:py-24 max-w-5xl">
        <SectionLabel>Račun</SectionLabel>
        <h1 className="mt-5 text-[9vw] leading-none sm:text-[3rem] 2xl:text-[4rem] font-bebas font-extrabold text-white-500 uppercase">
          Tvoj profil
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white-300">
          Pregled računa i nedavnih ispita.
        </p>
        <div className="mt-12">
          <ProfileSummary />
        </div>
      </div>
    </Container>
  );
}
