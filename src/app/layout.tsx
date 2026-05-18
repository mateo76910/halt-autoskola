import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const nunito = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
  adjustFontFallback: false,
});

const bebas = localFont({
  src: "./font/BebasNeuePro-ExpandedExtraBold.woff2",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Igor Halt — Autoškola",
    template: "%s · Igor Halt Autoškola",
  },
  description: "Učenje vožnje bez predrasuda — autoškola Igor Halt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className={`${nunito.variable} ${bebas.variable}`}>
      <body className="relative">
        {/* Top radial glow */}
        <div className="pointer-events-none absolute inset-0 top-0 left-0 h-[2000px] overflow-hidden -z-10 bg-radial-top" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
