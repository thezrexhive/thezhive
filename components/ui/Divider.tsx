import { cn } from "@/lib/utils";
import type { DividerProps } from "@/types";

export function Divider({
  orientation = "horizontal",
  label,
  className,
  decorative = true,
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role={decorative ? "none" : "separator"}
        aria-orientation="vertical"
        className={cn("self-stretch w-px bg-neutral-200", className)}
      />
    );
  }

  if (label) {
    return (
      <div
        role={decorative ? "none" : "separator"}
        aria-orientation="horizontal"
        className={cn("flex items-center gap-4", className)}
      >
        <div className="flex-1 h-px bg-neutral-200" />
        <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest select-none whitespace-nowrap">
          {label}
        </span>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>
    );
  }

  return (
    <hr
      role={decorative ? "none" : "separator"}
      className={cn("border-none h-px bg-neutral-200 w-full", className)}
    />
  );
}
