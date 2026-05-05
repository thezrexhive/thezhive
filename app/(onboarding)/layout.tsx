import Link from "next/link";

const steps = [
  { step: 1, title: "Account setup" },
  { step: 2, title: "Choose a plan" },
  { step: 3, title: "All set!" },
];

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="bg-white/90 backdrop-blur-md border-b border-neutral-200/60">
        <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-base" aria-label="ZRexHive home">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-primary text-white text-xs font-bold shadow-xs">Z</span>
            <span className="text-neutral-900">ZRex</span><span className="text-gradient">Hive</span>
          </Link>

          <nav aria-label="Onboarding progress">
            <ol className="flex items-center gap-2 sm:gap-4" role="list">
              {steps.map((step, i) => (
                <li key={step.step} className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold border-2 border-neutral-200 text-neutral-400 bg-white">
                      {step.step}
                    </span>
                    <span className="hidden sm:block text-xs font-medium text-neutral-500">{step.title}</span>
                  </div>
                  {i < steps.length - 1 && <div className="hidden sm:block h-px w-8 bg-neutral-200" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </nav>

          <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors">Exit</Link>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center py-16 px-6">
        <div className="w-full max-w-lg">{children}</div>
      </main>
    </div>
  );
}
