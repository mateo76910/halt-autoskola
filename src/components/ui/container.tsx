import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-6 md:px-10 lg:px-[4.125rem] max-w-[1800px] mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
