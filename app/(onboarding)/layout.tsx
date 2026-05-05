import Link from "next/link";

const steps = [
  { step: 1, title: "Account setup" },
  { step: 2, title: "Choose a plan" },
  { step: 3, title: "All set!" },
];

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-base text-primary-500" aria-label="ZRexHive home">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-500 text-white text-xs font-bold">Z</span>
            ZRexHive
          </Link>

          <nav aria-label="Onboarding progress">
            <ol className="flex items-center gap-2 sm:gap-4" role="list">
              {steps.map((step, i) => (
                <li key={step.step} className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold border-2 border-neutral-200 text-secondary-400 bg-white">
                      {step.step}
                    </span>
                    <span className="hidden sm:block text-xs font-medium text-secondary-500">{step.title}</span>
                  </div>
                  {i < steps.length - 1 && <div className="hidden sm:block h-px w-8 bg-neutral-200" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </nav>

          <Link href="/" className="text-sm text-secondary-500 hover:text-secondary-700 transition-colors">Exit</Link>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center py-16 px-6">
        <div className="w-full max-w-lg">{children}</div>
      </main>
    </div>
  );
}
