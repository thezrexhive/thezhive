import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";

const footerLinks = {
  Product: [
    { label: "Features",  href: "/#features" },
    { label: "Pricing",   href: "/pricing" },
    { label: "Changelog", href: "/changelog" },
  ],
  Company: [
    { label: "About",   href: "/about" },
    { label: "Blog",    href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Legal: [
    { label: "Privacy",  href: "/privacy" },
    { label: "Terms",    href: "/terms" },
    { label: "Security", href: "/security" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-base mb-5">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-pp text-white text-xs font-bold">Z</span>
              <span className="text-neutral-900">ZRex</span><span className="text-gradient-pp">Hive</span>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              The SaaS platform built for modern teams who ship fast and scale confidently.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-widest mb-4">{group}</h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">&copy; {new Date().getFullYear()} ZRexHive, Inc. All rights reserved.</p>
          <p className="text-xs text-neutral-400">Made with ✦ in San Francisco</p>
        </div>
      </Container>
    </footer>
  );
}
