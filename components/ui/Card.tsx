"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CardProps } from "@/types";

const variantClasses: Record<string, string> = {
  default:  "bg-white border border-neutral-200 shadow-card",
  elevated: "bg-white shadow-elevated border border-neutral-100",
  bordered: "bg-white border-2 border-neutral-200",
  gradient: "bg-gradient-subtle border border-primary-100",
};

const paddingClasses: Record<string, string> = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
};

export function Card({
  children, className, as: Tag = "div",
  variant = "default", padding = "md",
  hover = false, animate = false,
}: CardProps) {
  const classes = cn(
    "rounded-2xl overflow-hidden",
    variantClasses[variant],
    paddingClasses[padding],
    className
  );

  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{ y: -2, boxShadow: "0 8px 24px -4px rgb(79 70 229 / 0.12)" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  if (animate) {
    return (
      <motion.div
        className={classes}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <Tag className={classes}>{children}</Tag>;
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("px-6 py-5 border-b border-neutral-100", className)}>
      {children}
    </div>
  );
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("px-6 py-4 border-t border-neutral-100 bg-neutral-50/50", className)}>
      {children}
    </div>
  );
}
