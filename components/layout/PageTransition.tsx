"use client";

import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -6 },
};

const transition = {
  duration: 0.3,
  ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number],
};

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
