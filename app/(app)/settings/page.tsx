import type { Metadata } from "next";
import { DarkTopNav } from "@/components/layout/DarkTopNav";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/types/database";

export const metadata: Metadata = { title: "Settings" };

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: profileData } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id ?? "")
    .maybeSingle();

  const profile = profileData as Profile | null;

  return (
    <>
      <DarkTopNav breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Settings" }]} />
      <main className="flex-1 overflow-y-auto p-6 scrollbar-thin">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-semibold text-white tracking-tight mb-8">Settings</h1>

          {/* Profile card */}
          <div className="glass-dark rounded-3xl border border-white/[0.06] p-8 mb-5">
            <h2 className="text-base font-semibold text-white mb-6">Profile</h2>
            <div className="flex items-start gap-5 mb-6">
              <div className="h-16 w-16 rounded-3xl bg-gradient-pp flex items-center justify-center text-white text-xl font-bold shrink-0">
                {(profile?.display_name ?? user?.email ?? "U").charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white mb-0.5">
                  {profile?.display_name ?? "No display name set"}
                </p>
                <p className="text-sm text-white/40">{user?.email}</p>
                <button className="mt-2 text-xs text-primary-300 hover:text-primary-200 font-medium transition-colors">
                  Change avatar
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                label="Display name"
                defaultValue={profile?.display_name ?? ""}
                placeholder="Your display name"
                className="[&_label]:text-white/60 [&_div]:border-white/10 [&_div]:bg-white/5 [&_input]:text-white [&_input]:placeholder:text-white/20 [&_div]:focus-within:border-primary-400/60"
              />
              <Input
                label="Email address"
                type="email"
                defaultValue={user?.email ?? ""}
                disabled
                helperText="Email cannot be changed here. Contact support to update it."
                className="[&_label]:text-white/60 [&_div]:border-white/10 [&_div]:bg-white/5 [&_input]:text-white [&_input]:placeholder:text-white/20 [&_p]:text-white/30"
              />
            </div>

            <div className="border-t border-white/[0.06] my-5" />

            <div className="flex justify-end">
              <Button variant="primary" size="sm">Save changes</Button>
            </div>
          </div>

          {/* Plan card */}
          <div className="glass-dark rounded-3xl border border-primary-500/20 p-8 mb-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-white mb-1">Current plan</h2>
                <Badge variant="purple" dot>
                  {profile?.plan ?? "free"} plan
                </Badge>
              </div>
              <Button variant="secondary" size="sm" href="/pricing">Upgrade plan</Button>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mt-4">
              <div
                className="h-full rounded-full bg-gradient-pp"
                style={{ width: "48%" }}
                role="progressbar"
                aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}
              />
            </div>
            <p className="text-xs text-white/30 mt-2">2,400 / 5,000 API requests used this month</p>
          </div>

          {/* Danger zone */}
          <div className="glass-dark rounded-3xl border border-error-500/30 p-8">
            <h2 className="text-base font-semibold text-error-400 mb-2">Danger zone</h2>
            <p className="text-sm text-white/40 mb-4">
              Once you delete your account, all of your data will be permanently removed. This action cannot be undone.
            </p>
            <Button variant="danger" size="sm">Delete account</Button>
          </div>
        </div>
      </main>
    </>
  );
}
