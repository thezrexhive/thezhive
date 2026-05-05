import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <Container size="sm">
        <div className="text-center py-20">
          <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-4">404</p>
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">Page not found</h1>
          <p className="text-lg text-secondary-500 mb-10 max-w-sm mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button variant="primary" href="/">Go home</Button>
            <Button variant="ghost" href="/support">Contact support</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
