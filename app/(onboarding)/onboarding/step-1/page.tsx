"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";

export default function OnboardingStep1() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ displayName: "", email: "", password: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: { data: { display_name: formData.displayName } },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    router.push("/onboarding/step-2");
  }

  return (
    <div className="animate-in">
      <div className="mb-8">
        <p className="text-xs font-semibold text-primary-500 uppercase tracking-widest mb-2">Step 1 of 3</p>
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">Create your account</h1>
        <p className="text-sm text-secondary-500">Set up your ZRexHive account in under a minute.</p>
      </div>

      <div className="h-1 bg-neutral-200 rounded-full mb-10 overflow-hidden">
        <div className="h-full bg-primary-500 rounded-full" style={{ width: "33%" }} role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} aria-label="Step 1 of 3" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="displayName" className="block text-sm font-medium text-secondary-700 mb-1.5">Full name</label>
          <input id="displayName" type="text" required autoComplete="name" autoFocus value={formData.displayName} onChange={(e) => setFormData((p) => ({ ...p, displayName: e.target.value }))} placeholder="Alex Rivera" className="w-full h-11 px-3.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1.5">Work email</label>
          <input id="email" type="email" required autoComplete="email" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} placeholder="alex@company.com" className="w-full h-11 px-3.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-secondary-700 mb-1.5">Password</label>
          <input id="password" type="password" required autoComplete="new-password" minLength={8} value={formData.password} onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))} placeholder="Min. 8 characters" className="w-full h-11 px-3.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow" />
        </div>

        {error && <div role="alert" className="p-3 rounded-lg bg-error-50 border border-error-100 text-sm text-error-600">{error}</div>}

        <Button type="submit" variant="primary" fullWidth size="lg" loading={loading} className="mt-2">Continue</Button>
      </form>

      <p className="mt-6 text-center text-sm text-secondary-500">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-primary-500 hover:text-primary-600 transition-colors">Sign in</a>
      </p>
    </div>
  );
}
