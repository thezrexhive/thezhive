"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";

const variantClasses: Record<string, string> = {
  primary:   "bg-gradient-pp text-white shadow-sm hover:shadow-glow-purple",
  secondary: "bg-white text-primary-700 border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 shadow-xs",
  ghost:     "bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-primary-700",
  yellow:    "bg-yellow-500 text-neutral-900 font-semibold hover:bg-yellow-600 shadow-sm hover:shadow-glow-yellow",
  pink:      "bg-gradient-py text-white shadow-sm hover:shadow-glow-pink",
  blue:      "bg-blue-400 text-white hover:bg-blue-500 shadow-sm hover:shadow-glow-blue",
  danger:    "bg-error-600 text-white hover:bg-error-700 shadow-xs",
};

const sizeClasses: Record<string, string> = {
  sm: "h-8  px-3   text-xs  gap-1.5 rounded-xl",
  md: "h-10 px-4   text-sm  gap-2   rounded-2xl",
  lg: "h-12 px-6   text-base gap-2.5 rounded-2xl",
};

const loadingVariants = {
  animate: { rotate: 360, transition: { repeat: Infinity, duration: 0.75, ease: "linear" } },
};

const springTransition = { type: "spring", stiffness: 400, damping: 17 };

export function Button({
  children, className, variant = "primary", size = "md",
  loading = false, leftIcon, rightIcon, fullWidth = false,
  href, disabled, ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
    variantClasses[variant ?? "primary"],
    sizeClasses[size ?? "md"],
    fullWidth && "w-full",
    className
  );

  const content = loading ? (
    <>
      <motion.span
        variants={loadingVariants}
        animate="animate"
        className="block h-4 w-4 rounded-full border-2 border-current border-t-transparent"
        aria-hidden="true"
      />
      <span>Loading</span>
    </>
  ) : (
    <>
      {leftIcon  && <span aria-hidden="true">{leftIcon}</span>}
      {children}
      {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={springTransition}
      className={classes}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
