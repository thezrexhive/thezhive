import Link from "next/link";
import { CircleCheck as CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const nextSteps = [
  { title: "Explore your dashboard", description: "Get familiar with analytics and your workspace." },
  { title: "Invite your team", description: "Bring your colleagues onboard in seconds." },
  { title: "Set up your first project", description: "Start building and tracking your work." },
];

export default function OnboardingStep3() {
  return (
    <div className="animate-in text-center">
      <div className="h-1 bg-neutral-200 rounded-full mb-10 overflow-hidden">
        <div className="h-full bg-primary-500 rounded-full" style={{ width: "100%" }} role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} aria-label="Onboarding complete" />
      </div>

      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 rounded-full bg-success-50 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-success-500" aria-hidden="true" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-neutral-900 mb-2">You&apos;re all set!</h1>
      <p className="text-secondary-500 mb-10 max-w-sm mx-auto">Your ZRexHive workspace is ready. Here&apos;s what to do next to hit the ground running.</p>

      <div className="text-left space-y-3 mb-10">
        {nextSteps.map((step, i) => (
          <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-600 text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
            <div>
              <p className="text-sm font-semibold text-neutral-900">{step.title}</p>
              <p className="text-xs text-secondary-500 mt-0.5">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Button variant="primary" size="lg" href="/dashboard" fullWidth rightIcon={<ArrowRight className="h-4 w-4" />}>
        Go to my dashboard
      </Button>

      <p className="mt-4 text-sm text-secondary-400">
        Need help?{" "}
        <Link href="/support" className="text-primary-500 hover:text-primary-600 font-medium transition-colors">Contact support</Link>
      </p>
    </div>
  );
}
