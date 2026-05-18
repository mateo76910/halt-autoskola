export type NavRoute = {
  href: string;
  label: string;
};

export const MAIN_NAV: NavRoute[] = [
  { href: "/zasto-voziti", label: "Zašto voziti" },
  { href: "/tko-sam-ja", label: "Tko sam ja" },
  { href: "/kako-do-vozacke", label: "Kako do vozačke" },
  { href: "/autoskola-pilot", label: "Autoškola Pilot" },
  { href: "/ispiti", label: "Ispiti" },
  { href: "/najcesca-pitanja", label: "Pitanja i odgovori" },
];

export const FOOTER_NAV: NavRoute[] = [
  ...MAIN_NAV,
  { href: "/kontakt", label: "Kontakt" },
  { href: "/prijavi-se", label: "Prijavi se" },
];
