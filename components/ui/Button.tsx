import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";

const variantClasses = {
  primary: "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500/40 shadow-sm",
  secondary: "bg-white text-primary-500 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 focus-visible:ring-primary-500/20 shadow-sm",
  ghost: "bg-transparent text-secondary-700 hover:bg-neutral-100 hover:text-secondary-900 focus-visible:ring-secondary-500/20",
  danger: "bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500/40 shadow-sm",
};

const sizeClasses = {
  sm: "h-8 px-3 text-sm gap-1.5 rounded-md",
  md: "h-10 px-4 text-sm gap-2 rounded-lg",
  lg: "h-12 px-6 text-base gap-2.5 rounded-lg",
};

export function Button({
  children, className, variant = "primary", size = "md",
  loading = false, leftIcon, rightIcon, fullWidth = false, href, disabled, ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {children}
        {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} aria-disabled={disabled || loading} {...props}>
      {loading ? (
        <>
          <span className="size-4 rounded-full border-2 border-current border-t-transparent animate-spin" aria-hidden="true" />
          <span>Loading…</span>
        </>
      ) : (
        <>
          {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
          {children}
          {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
