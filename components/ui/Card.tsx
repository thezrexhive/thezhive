"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CardProps } from "@/types";

const variantClasses: Record<string, string> = {
  default:  "bg-white border border-neutral-200 shadow-card",
  tinted:   "bg-tint-purple border border-primary-100/60 shadow-card",
  yellow:   "bg-tint-yellow border border-yellow-500/20 shadow-card",
  pink:     "bg-tint-pink border border-pink-500/20 shadow-card",
  blue:     "bg-tint-blue border border-blue-400/20 shadow-card",
  gradient: "bg-gradient-pp text-white border-0 shadow-elevated",
  glass:    "glass-dark text-white",
};

const paddingClasses: Record<string, string> = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
};

const springTransition = { type: "spring", stiffness: 300, damping: 20 };

export function Card({
  children, className, as: Tag = "div",
  variant = "default", padding = "md",
  hover = false, animate = false,
}: CardProps) {
  const classes = cn(
    "rounded-3xl overflow-hidden",
    variantClasses[variant],
    paddingClasses[padding],
    className
  );

  const isGlass = variant === "glass";

  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{ y: -3, boxShadow: isGlass ? "0 8px 32px -4px rgb(0 0 0 / 0.5), 0 1px 0 0 rgb(255 255 255 / 0.1) inset" : "0 8px 24px -4px rgb(94 48 136 / 0.15)" }}
        transition={springTransition}
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
        transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
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
