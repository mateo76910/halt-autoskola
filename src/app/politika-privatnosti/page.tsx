import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata = { title: "Politika privatnosti" };

const SECTIONS = [
  {
    h: "1. Koje podatke prikupljamo?",
    body: (
      <>
        <p>
          Prilikom korištenja stranice prikupljamo sljedeće podatke:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-white-300">
          <li>Ime i prezime — kad popunjavaš kontakt formu</li>
          <li>Email adresa — za odgovor na upite i registraciju</li>
          <li>Telefonski broj — kad ga sam upišeš</li>
          <li>Rezultati riješenih ispita — povezani s tvojim računom</li>
        </ul>
      </>
    ),
  },
  {
    h: "2. Kako koristimo vaše podatke?",
    body: (
      <>
        <ul className="list-disc pl-5 space-y-1 text-white-300">
          <li>Za komunikaciju s tobom i odgovor na upite</li>
          <li>Za pohranu povijesti tvojih ispita</li>
          <li>Za unapređenje korisničkog iskustva</li>
        </ul>
      </>
    ),
  },
  {
    h: "3. Dijeljenje podataka s trećim stranama",
    body: (
      <>
        <p>
          Tvoje podatke ne prodajemo i ne dijelimo s trećim stranama, osim:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-white-300">
          <li>Davatelj usluge baze podataka (Supabase, EU regija)</li>
          <li>Kad smo zakonski obvezni</li>
        </ul>
      </>
    ),
  },
  {
    h: "4. Zaštita vaših podataka",
    body: (
      <p>
        Pristup podacima ima isključivo ovlašteni administrator. Svi prijenosi
        podataka su enkriptirani (HTTPS) i pohrana je na zaštićenim
        serverima u EU.
      </p>
    ),
  },
  {
    h: "5. Vaša prava",
    body: (
      <ul className="list-disc pl-5 space-y-1 text-white-300">
        <li>Pravo na pristup svojim podacima</li>
        <li>Pravo na ispravak ili brisanje podataka</li>
        <li>Pravo na prenosivost podataka</li>
        <li>Pravo na prigovor obradi</li>
      </ul>
    ),
  },
  {
    h: "6. Kolačići",
    body: (
      <p>
        Koristimo isključivo nužne tehničke kolačiće za rad stranice (npr.
        sesija prijave). Ne koristimo kolačiće za praćenje ili oglašavanje.
      </p>
    ),
  },
  {
    h: "7. Promjene politike privatnosti",
    body: (
      <p>
        Ovu politiku možemo s vremena na vrijeme ažurirati. Verzije će biti
        dostupne na ovoj stranici.
      </p>
    ),
  },
  {
    h: "8. Kontakt informacije",
    body: (
      <p>
        Za sva pitanja o privatnosti i podacima javi se na:{" "}
        <Link
          href="mailto:igor.halt@autoskola.com"
          className="text-green-500 hover:underline"
        >
          igor.halt@autoskola.com
        </Link>
        .
      </p>
    ),
  },
];

export default function Page() {
  return (
    <Container>
      <div className="py-16 lg:py-32 pb-24 lg:pb-[12.5rem]">
        <h1 className="text-[9vw] leading-none sm:text-[3rem] 2xl:text-[4rem] font-bebas font-extrabold text-white-500 uppercase">
          Politika privatnosti
        </h1>
        <div className="mt-12 max-w-3xl flex flex-col gap-8 text-lg leading-6 text-white-300">
          <p>
            Tvoja privatnost mi je važna. U ovom dokumentu opisujem koje
            podatke prikupljam, zašto, i kako ih čuvam.
          </p>
          {SECTIONS.map((s, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h2 className="font-bebas font-extrabold text-2xl text-white-500 uppercase">
                {s.h}
              </h2>
              {s.body}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
