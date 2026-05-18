import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/cn";

export function TwoColumnSection({
  label,
  children,
  background = "dark",
  className,
  labelTone,
}: {
  label?: string;
  children: React.ReactNode;
  background?: "dark" | "light";
  className?: string;
  labelTone?: "dark" | "light";
}) {
  const tone = labelTone ?? (background === "dark" ? "dark" : "light");
  return (
    <section
      className={cn(
        background === "light" && "bg-white-500 text-black-500",
        className,
      )}
    >
      <Container>
        <div className="py-24 lg:py-[12.5rem] flex flex-col lg:flex-row lg:justify-between lg:gap-16 xl:gap-36">
          {label && (
            <SectionLabel tone={tone} className="flex-shrink-0">
              {label}
            </SectionLabel>
          )}
          <div className="max-w-[42rem] mt-6 lg:mt-0 flex flex-col gap-6">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
