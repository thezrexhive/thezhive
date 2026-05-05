import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "success" | "warning" | "error";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

const variantClasses: Record<string, string> = {
  default: "bg-neutral-100 text-neutral-600",
  primary: "bg-primary-50 text-primary-700 ring-1 ring-primary-200/60",
  accent:  "bg-accent-50  text-accent-700  ring-1 ring-accent-200/60",
  success: "bg-success-50 text-success-700 ring-1 ring-success-200/60",
  warning: "bg-warning-50 text-warning-700 ring-1 ring-warning-200/60",
  error:   "bg-error-50   text-error-700   ring-1 ring-error-200/60",
};

const dotColors: Record<string, string> = {
  default: "bg-neutral-400",
  primary: "bg-primary-500",
  accent:  "bg-accent-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error:   "bg-error-500",
};

const sizeClasses: Record<string, string> = {
  sm: "px-2   py-0.5 text-[10px] gap-1",
  md: "px-2.5 py-1   text-xs     gap-1.5",
};

export function Badge({
  children, variant = "default", size = "md", dot = false, className,
}: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-full font-medium",
      variantClasses[variant],
      sizeClasses[size],
      className
    )}>
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full shrink-0", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
