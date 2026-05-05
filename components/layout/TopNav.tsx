import Link from "next/link";
import { Bell, Search, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface TopNavProps {
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
}

export function TopNav({ breadcrumbs, title }: TopNavProps) {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-neutral-200 shrink-0">
      <div className="flex items-center gap-1.5 min-w-0">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1" role="list">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-secondary-300 shrink-0" aria-hidden="true" />}
                  {crumb.href
                    ? <Link href={crumb.href} className="text-sm text-secondary-500 hover:text-secondary-900 transition-colors">{crumb.label}</Link>
                    : <span className="text-sm font-medium text-secondary-900" aria-current="page">{crumb.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        ) : title ? (
          <h1 className="text-base font-semibold text-secondary-900 truncate">{title}</h1>
        ) : null}
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <button type="button" className="flex items-center gap-2 h-9 px-3 rounded-lg text-secondary-500 hover:bg-neutral-100 hover:text-secondary-700 transition-colors text-sm" aria-label="Search">
          <Search className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline text-secondary-400 text-xs"><kbd className="font-sans">⌘K</kbd></span>
        </button>

        <button type="button" className="relative p-2 rounded-lg text-secondary-500 hover:bg-neutral-100 hover:text-secondary-700 transition-colors" aria-label="View notifications">
          <Bell className="h-4 w-4" aria-hidden="true" />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
        </button>

        <button type="button" className="flex items-center gap-2 h-9 pl-2 pr-3 rounded-lg hover:bg-neutral-100 transition-colors" aria-label="User menu" aria-haspopup="true">
          <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs font-semibold">U</span>
          <span className="hidden sm:block text-sm font-medium text-secondary-700">User</span>
        </button>
      </div>
    </header>
  );
}
