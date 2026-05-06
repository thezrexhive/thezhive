import Link from "next/link";
import { Sparkles, ArrowRight, LayoutDashboard, Users, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const nextSteps = [
  { title: "Explore your dashboard", description: "Get familiar with analytics and your workspace.", icon: LayoutDashboard, iconBg: "bg-tint-purple", iconColor: "text-primary-600" },
  { title: "Invite your team",       description: "Bring your colleagues onboard in seconds.",       icon: Users,          iconBg: "bg-tint-pink",   iconColor: "text-pink-600"  },
  { title: "Set up your first project", description: "Start building and tracking your work.",       icon: FolderOpen,     iconBg: "bg-tint-yellow", iconColor: "text-yellow-700"},
];

export default function OnboardingStep3() {
  return (
    <div className="animate-up text-center">
      <div className="h-1.5 bg-neutral-100 rounded-full mb-10 overflow-hidden">
        <div
          className="h-full w-full rounded-full bg-gradient-pp"
          role="progressbar"
          aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}
          aria-label="Onboarding complete"
        />
      </div>

      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 rounded-3xl bg-gradient-pp flex items-center justify-center shadow-glow-purple">
          <Sparkles className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
      </div>

      <Badge variant="yellow" className="mb-4">Setup complete!</Badge>

      <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2">You&apos;re all set!</h1>
      <p className="text-neutral-500 mb-10 max-w-sm mx-auto text-sm leading-relaxed">
        Your ZRexHive workspace is ready. Here&apos;s what to do next to hit the ground running.
      </p>

      <div className="text-left space-y-3 mb-10">
        {nextSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex items-start gap-4 p-4 rounded-3xl bg-white border border-neutral-200">
              <span className={`flex h-8 w-8 items-center justify-center rounded-2xl ${step.iconBg} shrink-0 mt-0.5`}>
                <Icon className={`h-4 w-4 ${step.iconColor}`} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{step.title}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Button variant="primary" size="lg" href="/dashboard" fullWidth rightIcon={<ArrowRight className="h-4 w-4" />}>
        Go to my dashboard
      </Button>

      <p className="mt-4 text-sm text-neutral-400">
        Need help?{" "}
        <Link href="/support" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
          Contact support
        </Link>
      </p>
    </div>
  );
}
