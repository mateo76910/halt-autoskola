import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  description,
  icon,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <Container>
      <div className={cn("pt-8 pb-12 lg:pt-16 lg:pb-20", className)}>
        <div className="flex items-center gap-3">
          {icon && (
            <span className="grid h-10 w-10 place-items-center rounded-full bg-green-500/15 text-green-500">
              {icon}
            </span>
          )}
          {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
        </div>
        <h1 className="mt-6 font-bebas font-extrabold text-white-500 uppercase leading-[100%] text-[10vw] sm:text-[4rem] xl:text-[6rem] max-w-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-xl leading-7 text-white-300">
            {description}
          </p>
        )}
      </div>
    </Container>
  );
}
