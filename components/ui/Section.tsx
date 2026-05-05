import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types";

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-12",
  md: "py-20",
  lg: "py-28",
  xl: "py-36",
};

export function Section({ children, className, id, as: Tag = "section", spacing = "lg" }: SectionProps) {
  return (
    <Tag id={id} className={cn(spacingClasses[spacing], className)}>
      {children}
    </Tag>
  );
}
