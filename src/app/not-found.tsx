import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container>
      <div className="py-32 text-center">
        <p className="font-bebas text-[8rem] leading-none text-green-500">404</p>
        <h1 className="mt-4 font-bebas text-4xl text-white-500 uppercase">
          Stranica nije pronađena
        </h1>
        <p className="mt-2 text-lg text-white-300">
          Možda je preseljena ili više ne postoji.
        </p>
        <div className="mt-8 inline-block">
          <Button href="/">Natrag na početnu</Button>
        </div>
      </div>
    </Container>
  );
}
