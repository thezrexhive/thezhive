export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tint-warm" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-pp text-white font-bold text-xl shadow-glow-purple animate-float">
          Z
        </span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-bounce-soft"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
