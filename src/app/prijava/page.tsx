import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata = { title: "Prijava" };

export default function Page() {
  return (
    <Container>
      <div className="py-16 lg:py-24 max-w-4xl">
        <SectionLabel>Račun</SectionLabel>
        <h1 className="mt-5 text-[9vw] leading-none sm:text-[3rem] 2xl:text-[4rem] font-bebas font-extrabold text-white-500 uppercase">
          Prijava
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white-300">
          Prijavi se da bi mogao spremati rezultate ispita i pratiti svoju povijest.
        </p>
        <div className="mt-12">
          <AuthForm mode="signIn" />
        </div>
      </div>
    </Container>
  );
}
