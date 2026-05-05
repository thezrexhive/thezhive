"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CircleCheck as CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { UserPlan } from "@/types";

const plans: Array<{ id: UserPlan; name: string; price: string; description: string; features: string[]; highlighted: boolean }> = [
  { id: "free",       name: "Free",       price: "$0",       description: "Great for personal projects and trying things out.",           features: ["3 projects", "5 team members", "Basic analytics"],                                   highlighted: false },
  { id: "pro",        name: "Pro",        price: "$49/mo",   description: "For growing teams that need more power and flexibility.",       features: ["Unlimited projects", "Unlimited members", "Advanced analytics", "Priority support"], highlighted: true  },
  { id: "enterprise", name: "Enterprise", price: "Custom",   description: "For large organizations with security and compliance needs.",   features: ["Everything in Pro", "SSO & SAML", "Audit logs", "Dedicated support"],               highlighted: false },
];

export default function OnboardingStep2() {
  const router = useRouter();
  const [selected, setSelected] = useState<UserPlan>("pro");
  const [loading, setLoading] = useState(false);

  function handleContinue() {
    setLoading(true);
    router.push("/onboarding/step-3");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="mb-8">
        <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">Step 2 of 3</p>
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2">Choose your plan</h1>
        <p className="text-sm text-neutral-500">Start free and upgrade anytime. No credit card required.</p>
      </div>

      <div className="h-1 bg-neutral-100 rounded-full mb-10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-primary"
          initial={{ width: "33%" }}
          animate={{ width: "66%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="progressbar"
          aria-valuenow={66} aria-valuemin={0} aria-valuemax={100}
          aria-label="Step 2 of 3"
        />
      </div>

      <div className="space-y-3 mb-8">
        {plans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setSelected(plan.id)}
            aria-pressed={selected === plan.id}
            className={cn(
              "w-full text-left p-4 rounded-2xl border-2 transition-all duration-150",
              selected === plan.id
                ? "border-primary-500 bg-primary-50/50 shadow-glow"
                : "border-neutral-200 bg-white hover:border-neutral-300"
            )}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0",
                    selected === plan.id ? "border-primary-500 bg-primary-500" : "border-neutral-300"
                  )}
                  aria-hidden="true"
                >
                  {selected === plan.id && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-neutral-900">{plan.name}</span>
                    {plan.highlighted && <Badge variant="accent" size="sm">Popular</Badge>}
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5">{plan.description}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-neutral-900 shrink-0">{plan.price}</span>
            </div>
            <ul className="ml-7 grid grid-cols-2 gap-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-1.5 text-xs text-neutral-600">
                  <CheckCircle className="h-3 w-3 text-primary-500 shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      <Button variant="gradient" fullWidth size="lg" loading={loading} onClick={handleContinue}>
        Continue with {plans.find((p) => p.id === selected)?.name} plan
      </Button>
    </motion.div>
  );
}
