"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MAIN_NAV } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Container>
      <header className="py-8 md:py-10 flex justify-between items-center gap-6">
        <Link href="/" className="text-white-500 flex-shrink-0">
          <Image
            src="/logo-white.svg"
            alt="Igor Halt logo"
            width={55}
            height={30}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {MAIN_NAV.map((route) => {
            const active =
              pathname === route.href || pathname.startsWith(route.href + "/");
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-md xl:text-lg text-white-500 leading-[140%] hover:underline pb-1 transition-colors",
                  active && "border-b border-green-500",
                )}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            href="/prijavi-se"
            roundedIcon
            rightElement={<ArrowUpRight size={16} />}
          >
            Upiši se
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Otvori izbornik"
          className="lg:hidden"
          onClick={() => setOpen(true)}
        >
          <svg
            className="w-8 h-8 text-white-500 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 bg-white-500 flex flex-col pt-28 px-6 z-50 overflow-y-auto">
          <Link href="/" className="absolute top-10 left-6">
            <Image src="/logo-black.svg" alt="logo" width={55} height={30} />
          </Link>
          <button
            aria-label="Zatvori izbornik"
            className="absolute top-10 right-6"
            onClick={() => setOpen(false)}
          >
            <svg
              className="w-8 h-8 text-black cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col space-y-5 mt-2 pb-12">
            {MAIN_NAV.map((route) => {
              const active = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "font-bebas text-[40px] leading-none text-black-500 uppercase",
                    active && "text-green-600",
                  )}
                >
                  {route.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="font-bebas text-[40px] leading-none text-black-500 uppercase"
            >
              Kontakt
            </Link>
            <div className="pt-6">
              <Button
                href="/prijavi-se"
                roundedIcon
                rightElement={<ArrowUpRight size={16} />}
                className="border-black-500 text-black-500 hover:text-black-300 hover:border-black-300"
              >
                Upiši se
              </Button>
            </div>
          </nav>
        </div>
      )}
    </Container>
  );
}
