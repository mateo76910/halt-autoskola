import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = { title: "Kontakt" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Javi se"
        icon={<Phone className="h-5 w-5" />}
        description="Najbrži način — pozovi ili pošalji WhatsApp poruku. Odgovaram u najkraćem roku."
      />

      <Container>
        <div className="pb-20 lg:pb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ContactCard
            icon={<Phone className="h-6 w-6" />}
            eyebrow="Telefon"
            value="097 7537 422"
            href="tel:+385977537422"
            cta="Nazovi"
          />
          <ContactCard
            icon={<MessageCircle className="h-6 w-6" />}
            eyebrow="WhatsApp"
            value="097 7537 422"
            href="https://wa.me/385977537422"
            cta="Otvori WhatsApp"
            external
          />
          <ContactCard
            icon={<MapPin className="h-6 w-6" />}
            eyebrow="Lokacija"
            value="Autoškola Pilot"
            sub="Više lokacija — detalje šaljem po prijavi"
          />
        </div>

        <div className="pb-20 lg:pb-32 rounded-md border border-green-500/40 bg-green-500/5 p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Spreman?</SectionLabel>
            <p className="mt-3 font-bebas font-extrabold uppercase text-white-500 text-3xl xl:text-4xl leading-[100%]">
              Upis bez čekanja, vožnje gotovo svaki dan
            </p>
          </div>
          <Button
            href="/prijavi-se"
            roundedIcon
            rightElement={<ArrowUpRight size={16} />}
          >
            Upiši se kod mene
          </Button>
        </div>
      </Container>
    </>
  );
}

function ContactCard({
  icon,
  eyebrow,
  value,
  sub,
  href,
  cta,
  external,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  value: string;
  sub?: string;
  href?: string;
  cta?: string;
  external?: boolean;
}) {
  return (
    <div className="rounded-md border border-black-400 bg-black-500/30 p-6 lg:p-8 flex flex-col gap-4 hover:border-green-500 transition-colors">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500/15 text-green-500">
        {icon}
      </span>
      <span className="text-xs uppercase tracking-wider text-white-00">
        {eyebrow}
      </span>
      <p className="font-bebas text-3xl text-white-500 uppercase leading-[100%]">
        {value}
      </p>
      {sub && <p className="text-md text-white-300 leading-6">{sub}</p>}
      {href && cta && (
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          className="mt-2 inline-flex items-center gap-1.5 text-md text-green-500 hover:text-green-400"
        >
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
