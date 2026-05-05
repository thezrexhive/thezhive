import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types";

const spacingClasses: Record<string, string> = {
  sm: "py-16",
  md: "py-24",
  lg: "py-32",
  xl: "py-40",
};

export function Section({
  children, className, id, as: Tag = "section", spacing = "lg",
}: SectionProps) {
  return (
    <Tag id={id} className={cn(spacingClasses[spacing], className)}>
      {children}
    </Tag>
  );
}
