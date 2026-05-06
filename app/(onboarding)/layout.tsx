import Link from "next/link";

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen onboarding-bg grain flex flex-col relative overflow-hidden">
      {/* Subtle ambient blobs — lighter than landing page */}
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-primary-200/30 blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-pink-200/25 blur-[70px] pointer-events-none" aria-hidden="true" />

      <header className="bg-white/70 backdrop-blur-md border-b border-white/60 relative z-10">
        <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-base" aria-label="ZRexHive home">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-pp text-white text-sm font-bold shadow-xs">Z</span>
            <span className="text-neutral-900">ZRex</span><span className="text-gradient-pp">Hive</span>
          </Link>
          <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors">Exit</Link>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center py-16 px-6 relative z-10">
        {/* Card container with glass effect */}
        <div className="w-full max-w-lg bg-white/75 backdrop-blur-sm rounded-3xl border border-white/80 shadow-elevated p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
