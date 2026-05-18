import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "text-lg leading-6 uppercase",
        tone === "dark" ? "text-white-00" : "text-black-200",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function DisplayTitle({
  children,
  className,
  as: As = "h2",
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  tone?: "light" | "dark";
}) {
  return (
    <As
      className={cn(
        "font-bebas font-extrabold uppercase leading-[100%]",
        "text-[2.5rem] sm:text-[3.5rem] xl:text-[5rem] 3xl:text-[7rem]",
        tone === "light" ? "text-white-500" : "text-black-500",
        className,
      )}
    >
      {children}
    </As>
  );
}
