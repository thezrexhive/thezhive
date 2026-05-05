import type { Metadata } from "next";
import { TrendingUp, TrendingDown, Users, Zap, ChartBar as BarChart3, FileText } from "lucide-react";
import { TopNav } from "@/components/layout/TopNav";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { createClient } from "@/lib/supabase/server";
import { formatRelativeTime } from "@/lib/utils";

export const metadata: Metadata = { title: "Dashboard" };

const stats = [
  { label: "Total users", value: "12,847", change: "+12.5%", positive: true, icon: Users, color: "text-primary-500", bg: "bg-primary-50" },
  { label: "Active projects", value: "284", change: "+4.3%", positive: true, icon: FileText, color: "text-success-600", bg: "bg-success-50" },
  { label: "API requests", value: "2.4M", change: "-2.1%", positive: false, icon: Zap, color: "text-accent-600", bg: "bg-accent-50" },
  { label: "Avg. response time", value: "143ms", change: "+0.8%", positive: true, icon: BarChart3, color: "text-secondary-600", bg: "bg-secondary-100" },
];

const recentActivity = [
  { id: "1", type: "deploy", description: "Deployed v2.4.1 to production", timestamp: new Date(Date.now() - 8 * 60000).toISOString(), user: "Alex Rivera", status: "success" as const },
  { id: "2", type: "invite", description: "Invited sarah@example.com to the workspace", timestamp: new Date(Date.now() - 42 * 60000).toISOString(), user: "Jordan Kim", status: "default" as const },
  { id: "3", type: "alert", description: "API rate limit warning: 85% of quota used", timestamp: new Date(Date.now() - 90 * 60000).toISOString(), user: "System", status: "warning" as const },
  { id: "4", type: "project", description: "Created new project: Marketing Dashboard", timestamp: new Date(Date.now() - 3 * 3600000).toISOString(), user: "Taylor Osei", status: "default" as const },
  { id: "5", type: "error", description: "Build failed: Missing environment variable", timestamp: new Date(Date.now() - 5 * 3600000).toISOString(), user: "CI/CD", status: "error" as const },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const displayName = user?.email?.split("@")[0] ?? "there";

  return (
    <>
      <TopNav breadcrumbs={[{ label: "Dashboard" }]} />
      <main className="flex-1 overflow-y-auto p-6 scrollbar-thin">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Good morning, {displayName}</h1>
          <p className="text-sm text-secondary-500 mt-1">Here&apos;s what&apos;s happening across your workspace today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} padding="md">
                <div className="flex items-start justify-between mb-4">
                  <span className={`h-10 w-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} aria-hidden="true" />
                  </span>
                  <span className={`flex items-center gap-1 text-xs font-medium ${stat.positive ? "text-success-600" : "text-error-500"}`}>
                    {stat.positive ? <TrendingUp className="h-3 w-3" aria-hidden="true" /> : <TrendingDown className="h-3 w-3" aria-hidden="true" />}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-neutral-900 mb-0.5">{stat.value}</p>
                <p className="text-sm text-secondary-500">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-base font-semibold text-neutral-900">Recent activity</h2>
                <button className="text-xs text-primary-500 hover:text-primary-600 font-medium transition-colors">View all</button>
              </div>
              <ul role="list" className="space-y-4">
                {recentActivity.map((item, i) => (
                  <li key={item.id} className={`flex items-start gap-4 ${i < recentActivity.length - 1 ? "pb-4 border-b border-neutral-100" : ""}`}>
                    <span className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-semibold text-secondary-600 shrink-0 mt-0.5" aria-hidden="true">
                      {item.user.charAt(0)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-secondary-800">{item.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-secondary-400">{item.user} · {formatRelativeTime(item.timestamp)}</span>
                        <Badge variant={item.status === "success" ? "success" : item.status === "warning" ? "warning" : item.status === "error" ? "error" : "default"}>
                          {item.type}
                        </Badge>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="space-y-4">
            <Card padding="lg">
              <h2 className="text-base font-semibold text-neutral-900 mb-4">Quick actions</h2>
              <div className="space-y-2">
                {[{ label: "New project", icon: FileText }, { label: "Invite teammate", icon: Users }, { label: "View analytics", icon: BarChart3 }].map(({ label, icon: Icon }) => (
                  <button key={label} type="button" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-secondary-700 hover:bg-neutral-50 hover:text-secondary-900 transition-colors text-left border border-neutral-200 hover:border-neutral-300">
                    <Icon className="h-4 w-4 text-secondary-400" aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>
            </Card>

            <Card padding="md" className="bg-primary-500 border-primary-500">
              <div className="text-white">
                <h3 className="text-sm font-semibold mb-1">Usage this month</h3>
                <p className="text-xs text-primary-200 mb-3">2.4M / 5M API requests</p>
                <div className="h-2 rounded-full bg-primary-400 overflow-hidden">
                  <div className="h-full rounded-full bg-white" style={{ width: "48%" }} role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100} aria-label="48% of API quota used" />
                </div>
                <p className="text-xs text-primary-200 mt-2">48% of quota used</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
