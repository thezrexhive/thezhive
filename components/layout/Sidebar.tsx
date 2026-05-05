"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Settings, Users, BarChart3,
  FileText, Bell, HelpCircle, ChevronLeft, ChevronRight, Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { SidebarItem } from "@/types";

const primaryNav: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Projects", href: "/projects", icon: FileText },
  { label: "Team", href: "/team", icon: Users },
  { label: "Notifications", href: "/notifications", icon: Bell, badge: 3 },
];

const secondaryNav: SidebarItem[] = [
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Help & Support", href: "/support", icon: HelpCircle },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative flex flex-col h-full bg-white border-r border-neutral-200 transition-all duration-300 ease-in-out shrink-0",
        collapsed ? "w-16" : "w-60"
      )}
      aria-label="Dashboard navigation"
    >
      <div className={cn("flex items-center h-16 px-4 border-b border-neutral-200 shrink-0", collapsed ? "justify-center" : "gap-2")}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white text-sm font-bold">Z</span>
        {!collapsed && <span className="font-bold text-base text-primary-500 truncate">ZRexHive</span>}
      </div>

      <nav className="flex-1 px-2 py-4 overflow-y-auto scrollbar-thin">
        <ul role="list" className="space-y-0.5">
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors group",
                    active ? "bg-primary-50 text-primary-600" : "text-secondary-600 hover:bg-neutral-100 hover:text-secondary-900",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <Icon className={cn("h-4 w-4 shrink-0", active ? "text-primary-500" : "text-secondary-400 group-hover:text-secondary-600")} aria-hidden="true" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                  {!collapsed && item.badge !== undefined && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-500 text-white text-[10px] font-bold px-1">{item.badge}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {!collapsed && (
        <div className="mx-2 mb-3 p-3 rounded-lg bg-primary-50 border border-primary-100">
          <div className="flex items-center gap-2 mb-1.5">
            <Zap className="h-4 w-4 text-accent-500" aria-hidden="true" />
            <span className="text-xs font-semibold text-primary-700">Upgrade to Pro</span>
          </div>
          <p className="text-xs text-primary-600 mb-2">Unlock advanced analytics and unlimited projects.</p>
          <Link href="/pricing" className="block text-center text-xs font-medium py-1.5 px-3 rounded-md bg-primary-500 text-white hover:bg-primary-600 transition-colors">
            View plans
          </Link>
        </div>
      )}

      <div className="border-t border-neutral-200 px-2 py-3">
        <ul role="list" className="space-y-0.5">
          {secondaryNav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors group",
                    active ? "bg-primary-50 text-primary-600" : "text-secondary-600 hover:bg-neutral-100 hover:text-secondary-900",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <Icon className={cn("h-4 w-4 shrink-0", active ? "text-primary-500" : "text-secondary-400 group-hover:text-secondary-600")} aria-hidden="true" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-sm text-secondary-500 hover:text-secondary-700 hover:bg-neutral-50 transition-colors z-10"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed
          ? <ChevronRight className="h-3 w-3" aria-hidden="true" />
          : <ChevronLeft className="h-3 w-3" aria-hidden="true" />}
      </button>
    </aside>
  );
}
