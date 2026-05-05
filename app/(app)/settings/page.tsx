import type { Metadata } from "next";
import { TopNav } from "@/components/layout/TopNav";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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
      <TopNav breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Settings" }]} />
      <main className="flex-1 overflow-y-auto p-6 scrollbar-thin">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold text-neutral-900 mb-8">Settings</h1>

          <Card padding="lg" className="mb-6">
            <h2 className="text-base font-semibold text-neutral-900 mb-6">Profile</h2>
            <div className="flex items-start gap-6 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold shrink-0">
                {(profile?.display_name ?? user?.email ?? "U").charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900 mb-0.5">{profile?.display_name ?? "No display name set"}</p>
                <p className="text-sm text-secondary-500">{user?.email}</p>
                <button className="mt-2 text-xs text-primary-500 hover:text-primary-600 font-medium transition-colors">Change avatar</button>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="display_name" className="block text-sm font-medium text-secondary-700 mb-1.5">Display name</label>
                <input id="display_name" type="text" defaultValue={profile?.display_name ?? ""} placeholder="Your display name" className="w-full h-10 px-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1.5">Email address</label>
                <input id="email" type="email" defaultValue={user?.email ?? ""} disabled className="w-full h-10 px-3 rounded-lg border border-neutral-200 text-sm text-secondary-400 bg-neutral-50 cursor-not-allowed" />
                <p className="text-xs text-secondary-400 mt-1">Email cannot be changed here. Contact support to update it.</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
              <Button variant="primary" size="sm">Save changes</Button>
            </div>
          </Card>

          <Card padding="lg" className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-neutral-900">Current plan</h2>
                <p className="text-sm text-secondary-500 mt-0.5 capitalize">{profile?.plan ?? "free"} plan</p>
              </div>
              <Button variant="secondary" size="sm" href="/pricing">Upgrade plan</Button>
            </div>
            <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
              <div className="h-full rounded-full bg-primary-500" style={{ width: "48%" }} role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <p className="text-xs text-secondary-400 mt-2">2,400 / 5,000 API requests used this month</p>
          </Card>

          <Card padding="lg" className="border-error-200">
            <h2 className="text-base font-semibold text-error-600 mb-2">Danger zone</h2>
            <p className="text-sm text-secondary-500 mb-4">Once you delete your account, all of your data will be permanently removed. This action cannot be undone.</p>
            <Button variant="danger" size="sm">Delete account</Button>
          </Card>
        </div>
      </main>
    </>
  );
}
