"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ email: "", password: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="animate-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">Welcome back</h1>
        <p className="text-sm text-secondary-500">Sign in to your ZRexHive workspace.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1.5">Email address</label>
          <input id="email" type="email" required autoComplete="email" autoFocus value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} placeholder="alex@company.com" className="w-full h-11 px-3.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="password" className="block text-sm font-medium text-secondary-700">Password</label>
            <Link href="/forgot-password" className="text-xs text-primary-500 hover:text-primary-600 transition-colors">Forgot password?</Link>
          </div>
          <input id="password" type="password" required autoComplete="current-password" value={formData.password} onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))} placeholder="Your password" className="w-full h-11 px-3.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow" />
        </div>

        {error && (
          <div role="alert" className="p-3 rounded-lg bg-error-50 border border-error-100 text-sm text-error-600">{error}</div>
        )}

        <Button type="submit" variant="primary" fullWidth size="lg" loading={loading} className="mt-2">Sign in</Button>
      </form>

      <p className="mt-6 text-center text-sm text-secondary-500">
        Don&apos;t have an account?{" "}
        <Link href="/onboarding/step-1" className="font-medium text-primary-500 hover:text-primary-600 transition-colors">Get started free</Link>
      </p>
    </div>
  );
}
