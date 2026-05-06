import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tint-warm">
      <Container size="sm">
        <div className="text-center py-20">
          <p className="text-6xl font-bold text-gradient-pp mb-4">404</p>
          <Badge variant="pink" className="mb-6">Page not found</Badge>
          <h1 className="text-title font-bold text-neutral-900 mb-4">Oops, lost in the hive</h1>
          <p className="text-lg text-neutral-500 mb-10 max-w-sm mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button variant="primary"   href="/">Go home</Button>
            <Button variant="secondary" href="/support">Contact support</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
