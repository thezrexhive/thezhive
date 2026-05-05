import { cn } from "@/lib/utils";
import type { ContainerProps } from "@/types";

const sizeClasses: Record<string, string> = {
  sm:   "max-w-2xl",
  md:   "max-w-4xl",
  lg:   "max-w-container",
  full: "max-w-none",
};

export function Container({
  children, className, as: Tag = "div", size = "lg",
}: ContainerProps) {
  return (
    <Tag className={cn("container-base", sizeClasses[size], className)}>
      {children}
    </Tag>
  );
}
