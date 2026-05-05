import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/changelog" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary-500 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-500 text-white text-xs font-bold">Z</span>
              ZRexHive
            </Link>
            <p className="text-sm text-secondary-500 leading-relaxed max-w-xs">
              The SaaS platform built for modern teams who ship fast and scale confidently.
            </p>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold text-secondary-900 uppercase tracking-wider mb-4">{group}</h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-secondary-500 hover:text-secondary-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-200 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-400">&copy; {new Date().getFullYear()} ZRexHive, Inc. All rights reserved.</p>
          <p className="text-xs text-secondary-400">Built with care in San Francisco</p>
        </div>
      </Container>
    </footer>
  );
}
