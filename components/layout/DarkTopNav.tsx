import Link from "next/link";
import { Bell, Search, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DarkTopNavProps {
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
}

export function DarkTopNav({ breadcrumbs, title }: DarkTopNavProps) {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/[0.06] shrink-0 glass-dark">
      <div className="flex items-center gap-1.5 min-w-0">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1" role="list">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/20 shrink-0" aria-hidden="true" />}
                  {crumb.href
                    ? <Link href={crumb.href} className="text-sm text-white/40 hover:text-white/80 transition-colors">{crumb.label}</Link>
                    : <span className="text-sm font-medium text-white/90" aria-current="page">{crumb.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        ) : title ? (
          <h1 className="text-base font-semibold text-white/90 truncate">{title}</h1>
        ) : null}
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <button
          type="button"
          className="flex items-center gap-2 h-9 px-3 rounded-2xl text-white/40 hover:bg-white/[0.06] hover:text-white/80 transition-colors text-sm"
          aria-label="Search"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline text-white/30 text-xs"><kbd className="font-sans">⌘K</kbd></span>
        </button>

        <button
          type="button"
          className="relative p-2 rounded-2xl text-white/40 hover:bg-white/[0.06] hover:text-white/80 transition-colors"
          aria-label="View notifications"
        >
          <Bell className="h-4 w-4" aria-hidden="true" />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse-soft" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 h-9 pl-2 pr-3 rounded-2xl hover:bg-white/[0.06] transition-colors"
          aria-label="User menu"
          aria-haspopup="true"
        >
          <span className="h-6 w-6 rounded-full bg-gradient-pp flex items-center justify-center text-white text-xs font-semibold">U</span>
          <span className="hidden sm:block text-sm font-medium text-white/70">User</span>
        </button>
      </div>
    </header>
  );
}
