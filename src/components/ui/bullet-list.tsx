import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export function BulletList({
  items,
  variant = "light",
  className,
}: {
  items: string[];
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-green-500/15 text-green-500">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span
            className={cn(
              "text-lg leading-6",
              variant === "light" ? "text-white-300" : "text-black-500",
            )}
          >
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}
