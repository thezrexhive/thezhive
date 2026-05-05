"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Settings, Users, ChartBar as BarChart3,
  FileText, Bell, CircleHelp as HelpCircle,
  ChevronLeft, ChevronRight, Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { SidebarItem } from "@/types";

const primaryNav: SidebarItem[] = [
  { label: "Dashboard",     href: "/dashboard",     icon: LayoutDashboard },
  { label: "Analytics",     href: "/analytics",     icon: BarChart3 },
  { label: "Projects",      href: "/projects",      icon: FileText },
  { label: "Team",          href: "/team",           icon: Users },
  { label: "Notifications", href: "/notifications",  icon: Bell, badge: 3 },
];

const secondaryNav: SidebarItem[] = [
  { label: "Settings",     href: "/settings", icon: Settings },
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
      {/* Logo */}
      <div className={cn(
        "flex items-center h-16 px-4 border-b border-neutral-100 shrink-0",
        collapsed ? "justify-center" : "gap-2.5"
      )}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-white text-sm font-bold shadow-xs">
          Z
        </span>
        {!collapsed && (
          <span className="font-bold text-base truncate">
            <span className="text-neutral-900">ZRex</span>
            <span className="text-gradient">Hive</span>
          </span>
        )}
      </div>

      {/* Primary nav */}
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
                    "flex items-center gap-3 px-2.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 group",
                    active
                      ? "bg-primary-50 text-primary-700"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0 transition-colors",
                      active ? "text-primary-600" : "text-neutral-400 group-hover:text-neutral-600"
                    )}
                    aria-hidden="true"
                  />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                  {!collapsed && item.badge !== undefined && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-600 text-white text-[10px] font-bold px-1">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Upgrade prompt */}
      {!collapsed && (
        <div className="mx-2 mb-3 p-3.5 rounded-xl bg-gradient-subtle border border-primary-100">
          <div className="flex items-center gap-2 mb-1.5">
            <Zap className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
            <span className="text-xs font-semibold text-neutral-900">Upgrade to Pro</span>
          </div>
          <p className="text-xs text-neutral-500 mb-2.5 leading-relaxed">
            Unlock advanced analytics and unlimited projects.
          </p>
          <Link
            href="/pricing"
            className="block text-center text-xs font-semibold py-1.5 px-3 rounded-lg bg-gradient-primary text-white hover:opacity-90 transition-opacity"
          >
            View plans
          </Link>
        </div>
      )}

      {/* Secondary nav */}
      <div className="border-t border-neutral-100 px-2 py-3">
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
                    "flex items-center gap-3 px-2.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 group",
                    active
                      ? "bg-primary-50 text-primary-700"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      active ? "text-primary-600" : "text-neutral-400 group-hover:text-neutral-600"
                    )}
                    aria-hidden="true"
                  />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Collapse toggle */}
      <motion.button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-xs text-neutral-400 hover:text-neutral-700 hover:border-neutral-300 transition-colors z-10"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed
          ? <ChevronRight className="h-3 w-3" aria-hidden="true" />
          : <ChevronLeft  className="h-3 w-3" aria-hidden="true" />}
      </motion.button>
    </aside>
  );
}
