import type { Metadata } from "next";
import { TrendingUp, TrendingDown, Users, Zap, ChartBar as BarChart3, FileText, Sparkles } from "lucide-react";
import { DarkTopNav } from "@/components/layout/DarkTopNav";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { createClient } from "@/lib/supabase/server";
import { formatRelativeTime } from "@/lib/utils";

export const metadata: Metadata = { title: "Dashboard" };

const stats = [
  { label: "Total users",        value: "12,847", change: "+12.5%", positive: true,  icon: Users,    accentColor: "text-primary-300", accentBg: "bg-primary-500/10", borderColor: "border-primary-500/20" },
  { label: "Active projects",    value: "284",    change: "+4.3%",  positive: true,  icon: FileText, accentColor: "text-yellow-400",  accentBg: "bg-yellow-500/10",  borderColor: "border-yellow-500/20"  },
  { label: "API requests",       value: "2.4M",   change: "-2.1%",  positive: false, icon: Zap,      accentColor: "text-pink-400",    accentBg: "bg-pink-500/10",    borderColor: "border-pink-500/20"    },
  { label: "Avg. response time", value: "143ms",  change: "+0.8%",  positive: true,  icon: BarChart3,accentColor: "text-blue-300",    accentBg: "bg-blue-400/10",    borderColor: "border-blue-400/20"    },
];

const recentActivity = [
  { id: "1", type: "deploy",  description: "Deployed v2.4.1 to production",              timestamp: new Date(Date.now() - 8 * 60000).toISOString(),   user: "Alex Rivera",  status: "success" as const, avatarBg: "bg-gradient-pp" },
  { id: "2", type: "invite",  description: "Invited sarah@example.com to the workspace", timestamp: new Date(Date.now() - 42 * 60000).toISOString(),  user: "Jordan Kim",   status: "default" as const, avatarBg: "bg-gradient-pb" },
  { id: "3", type: "alert",   description: "API rate limit warning: 85% of quota used",  timestamp: new Date(Date.now() - 90 * 60000).toISOString(),  user: "System",       status: "warning" as const, avatarBg: "bg-yellow-500"   },
  { id: "4", type: "project", description: "Created new project: Marketing Dashboard",   timestamp: new Date(Date.now() - 3 * 3600000).toISOString(), user: "Taylor Osei",  status: "default" as const, avatarBg: "bg-gradient-py" },
  { id: "5", type: "error",   description: "Build failed: Missing environment variable", timestamp: new Date(Date.now() - 5 * 3600000).toISOString(), user: "CI/CD",        status: "error" as const,   avatarBg: "bg-pink-500"    },
];

const quickActions = [
  { label: "New project",     icon: FileText,  color: "text-primary-300", bg: "bg-primary-500/10" },
  { label: "Invite teammate", icon: Users,     color: "text-yellow-400",  bg: "bg-yellow-500/10"  },
  { label: "View analytics",  icon: BarChart3, color: "text-blue-300",    bg: "bg-blue-400/10"    },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const displayName = user?.email?.split("@")[0] ?? "there";

  return (
    <>
      <DarkTopNav breadcrumbs={[{ label: "Dashboard" }]} />
      <main className="flex-1 overflow-y-auto p-6 scrollbar-thin">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white tracking-tight">Good morning, {displayName}</h1>
          <p className="text-sm text-white/40 mt-1">Here&apos;s what&apos;s happening across your workspace today.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`glass-dark rounded-3xl p-5 border ${stat.borderColor} hover:bg-white/[0.08] transition-colors`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`h-10 w-10 rounded-2xl ${stat.accentBg} flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${stat.accentColor}`} aria-hidden="true" />
                  </span>
                  <span className={`flex items-center gap-1 text-xs font-medium ${stat.positive ? "text-success-400" : "text-error-400"}`}>
                    {stat.positive
                      ? <TrendingUp   className="h-3 w-3" aria-hidden="true" />
                      : <TrendingDown className="h-3 w-3" aria-hidden="true" />}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-white mb-0.5">{stat.value}</p>
                <p className="text-sm text-white/40">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Activity feed */}
          <div className="lg:col-span-2 glass-dark rounded-3xl border border-white/[0.06] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-semibold text-white">Recent activity</h2>
              <button className="text-xs text-primary-300 hover:text-primary-200 font-medium transition-colors">View all</button>
            </div>
            <ul role="list" className="space-y-4">
              {recentActivity.map((item, i) => (
                <li key={item.id} className={`flex items-start gap-4 ${i < recentActivity.length - 1 ? "pb-4 border-b border-white/[0.05]" : ""}`}>
                  <span className={`h-8 w-8 rounded-full ${item.avatarBg} flex items-center justify-center text-xs font-semibold text-white shrink-0 mt-0.5`} aria-hidden="true">
                    {item.user.charAt(0)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/70">{item.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-white/30">{item.user} · {formatRelativeTime(item.timestamp)}</span>
                      <Badge
                        variant={item.status === "success" ? "purple" : item.status === "warning" ? "yellow" : item.status === "error" ? "error" : "default"}
                        size="sm"
                      >
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Quick actions */}
            <div className="glass-dark rounded-3xl border border-white/[0.06] p-6">
              <h2 className="text-base font-semibold text-white mb-4">Quick actions</h2>
              <div className="space-y-2">
                {quickActions.map(({ label, icon: Icon, color, bg }) => (
                  <button
                    key={label}
                    type="button"
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm text-white/60 hover:bg-white/[0.06] hover:text-white/90 transition-colors text-left border border-white/[0.06] hover:border-white/[0.12]"
                  >
                    <span className={`h-7 w-7 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`h-3.5 w-3.5 ${color}`} aria-hidden="true" />
                    </span>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Usage card */}
            <div className="relative rounded-3xl bg-gradient-pp p-5 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_white,_transparent)]" />
              <div className="relative text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="h-4 w-4 text-yellow-300" aria-hidden="true" />
                  <h3 className="text-sm font-semibold">Usage this month</h3>
                </div>
                <p className="text-xs text-white/60 mb-3">2.4M / 5M API requests</p>
                <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-yellow-400"
                    style={{ width: "48%" }}
                    role="progressbar"
                    aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}
                    aria-label="48% of API quota used"
                  />
                </div>
                <p className="text-xs text-white/60 mt-2">48% of quota used</p>
              </div>
            </div>

            {/* AI insights */}
            <div className="glass-dark rounded-3xl border border-yellow-500/20 p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <Badge variant="yellow" size="sm" className="mb-2">AI Insights</Badge>
                  <p className="text-sm text-white/60 leading-relaxed">Your team&apos;s productivity is up 23% this week. Consider scheduling a sync to celebrate wins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
