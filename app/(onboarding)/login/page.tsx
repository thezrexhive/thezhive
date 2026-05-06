"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Divider } from "@/components/ui/Divider";
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
    >
      <div className="mb-8">
        <div className="flex justify-center mb-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-pp shadow-glow-purple">
            <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
        </div>
        <p className="text-xs font-semibold text-gradient-pp uppercase tracking-widest text-center mb-2">Welcome back</p>
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2 text-center">Sign in to ZRexHive</h1>
        <p className="text-sm text-neutral-500 text-center">Enter your credentials to access your workspace.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Input
          label="Email address"
          type="email"
          required
          autoComplete="email"
          autoFocus
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          placeholder="alex@company.com"
        />

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-neutral-700">Password</label>
            <Link href="/forgot-password" className="text-xs text-primary-600 hover:text-primary-700 font-medium transition-colors">
              Forgot password?
            </Link>
          </div>
          <Input
            type="password"
            required
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))}
            placeholder="Your password"
            error={error ?? undefined}
          />
        </div>

        <Button type="submit" variant="primary" fullWidth size="lg" loading={loading} className="mt-2">
          Sign in
        </Button>
      </form>

      <Divider label="or" className="my-6" />

      <p className="text-center text-sm text-neutral-500">
        Don&apos;t have an account?{" "}
        <Link href="/onboarding/step-1" className="font-medium text-primary-600 hover:text-primary-700 transition-colors">
          Get started free
        </Link>
      </p>
    </motion.div>
  );
}
