import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FacebookIcon, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FOOTER_NAV } from "@/lib/routes";

const DATA = {
  title: {
    text1: "POLAGANJE VOZAČKOG",
    text2: "ISPITA NE MORA",
    text3: "STVARATI GLAVOBOLJE",
  },
  description: {
    text1: "Stisni gas i idemo po",
    text2: "vozačku dozvolu",
  },
  copyright: `IGOR HALT; ${new Date().getFullYear()} - All rights reserved`,
  socialLinks: [
    {
      label: "Facebook",
      href: "#",
      icon: <FacebookIcon width={16} fill="black" className="text-black-500" />,
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: <Linkedin width={16} fill="black" className="text-black-500" />,
    },
  ],
};

export function Footer() {
  return (
    <div className="relative overflow-hidden mt-24 md:mt-32">
      <div className="relative">
        <Image
          className="object-cover w-full h-auto"
          src="/footer.png"
          alt="footer"
          width={2000}
          height={1500}
        />
        <h2 className="absolute text-[7vw] font-bebas font-extrabold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white-500 text-center leading-[100%] 3xl:text-[126px]">
          {DATA.title.text1} <br />
          {DATA.title.text2} <br />
          {DATA.title.text3}
        </h2>
      </div>

      <Container>
        <div className="relative overflow-hidden py-10 md:py-16">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-x-4 gap-y-6 md:gap-y-10">
            <div className="col-span-6 row-span-2 md:col-span-12 md:row-span-1">
              <nav className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-3">
                {FOOTER_NAV.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="text-lg text-white-500 leading-[140%] hover:underline"
                  >
                    {r.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="col-span-6 md:col-start-1 md:col-end-10 md:row-span-1">
              <p className="font-bebas text-2xl leading-[100%] font-extrabold md:text-4xl text-black-300 xl:text-[72px]">
                {DATA.description.text1} <br />
                {DATA.description.text2}
              </p>
            </div>

            <div className="col-span-6 row-start-1 md:col-start-10 md:col-end-13 md:row-span-1 flex justify-end gap-4">
              {DATA.socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  className="flex w-10 h-10 z-10 items-center justify-center bg-white-500 rounded-md"
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            <div className="col-span-6 row-span-3 md:col-span-12">
              <Button
                href="/kontakt"
                roundedIcon
                rightElement={<ArrowUpRight size={16} />}
              >
                Kontakt
              </Button>
            </div>

            <div className="col-span-6 row-span-4 flex flex-row items-center justify-between md:col-span-12">
              <Link href="/">
                <Image
                  src="/logo-white.svg"
                  alt="logo-footer"
                  width={55}
                  height={30}
                />
              </Link>
              <p className="text-white-00 text-sm leading-[140%]">
                {DATA.copyright}
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 w-full h-[2000px] overflow-hidden -z-10 bg-radial-bottom" />
    </div>
  );
}
