"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
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
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="mb-8">
        <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Step 1 of 3</p>
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2">Create your account</h1>
        <p className="text-sm text-neutral-500">Set up your ZRexHive account in under a minute.</p>
      </div>

      <div className="h-1 bg-neutral-100 rounded-full mb-10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-primary"
          initial={{ width: 0 }}
          animate={{ width: "33%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="progressbar"
          aria-valuenow={33} aria-valuemin={0} aria-valuemax={100}
          aria-label="Step 1 of 3"
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Input
          label="Full name"
          type="text"
          required
          autoComplete="name"
          autoFocus
          value={formData.displayName}
          onChange={(e) => setFormData((p) => ({ ...p, displayName: e.target.value }))}
          placeholder="Alex Rivera"
        />
        <Input
          label="Work email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          placeholder="alex@company.com"
        />
        <Input
          label="Password"
          type="password"
          required
          autoComplete="new-password"
          minLength={8}
          value={formData.password}
          onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))}
          placeholder="Min. 8 characters"
          helperText="Must be at least 8 characters"
          error={error ?? undefined}
        />

        <Button type="submit" variant="gradient" fullWidth size="lg" loading={loading} className="mt-2">
          Continue
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-500">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-primary-600 hover:text-primary-700 transition-colors">Sign in</a>
      </p>
    </motion.div>
  );
}
