export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-white font-bold text-lg">Z</span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary-300 animate-bounce" style={{ animationDelay: `${i * 120}ms` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
