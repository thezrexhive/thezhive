"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Pricing",  href: "/pricing" },
  { label: "About",    href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-neutral-200/60">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
            aria-label="ZRexHive home"
          >
            <motion.span
              className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-pp text-white text-sm font-bold shadow-xs"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Z
            </motion.span>
            <span className="text-neutral-900">ZRex</span><span className="text-gradient-pp">Hive</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-neutral-600 rounded-xl hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2.5">
            <Button variant="ghost" size="sm" href="/login">Sign in</Button>
            <Button variant="primary" size="sm" href="/onboarding/step-1" leftIcon={<Sparkles className="h-3.5 w-3.5" />}>
              Get started
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-neutral-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen
              ? <X    className="h-5 w-5" aria-hidden="true" />
              : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
            className="md:hidden border-t border-neutral-100 bg-white"
          >
            <Container>
              <ul className="flex flex-col py-4 gap-1" role="list">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-sm font-medium text-neutral-700 rounded-2xl hover:bg-neutral-100 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 pb-4">
                <Button variant="ghost"   href="/login"             fullWidth>Sign in</Button>
                <Button variant="primary" href="/onboarding/step-1" fullWidth>Get started</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
