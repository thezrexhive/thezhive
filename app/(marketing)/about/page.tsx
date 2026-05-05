import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ZRexHive — our mission, our team, and why we built the platform.",
};

const values = [
  { title: "Transparency first", description: "No hidden pricing, no vague roadmaps, no BS. We believe in radical honesty with our customers and within our team." },
  { title: "Craft over speed", description: "We move fast but never cut corners on quality. Every feature is polished before it ships." },
  { title: "Customer obsession", description: "We answer every support ticket, read every review, and act on every piece of feedback." },
  { title: "Long-term thinking", description: "We&apos;re building a company for decades, not an exit. Sustainable growth and decisions that benefit customers long-term." },
];

const team = [
  { name: "Alex Rivera", role: "Co-founder & CEO", initials: "AR" },
  { name: "Jordan Kim", role: "Co-founder & CTO", initials: "JK" },
  { name: "Taylor Osei", role: "Head of Design", initials: "TO" },
  { name: "Sam Patel", role: "Head of Engineering", initials: "SP" },
  { name: "Casey Liu", role: "Head of Growth", initials: "CL" },
  { name: "Morgan Walsh", role: "Head of Customer Success", initials: "MW" },
];

export default function AboutPage() {
  return (
    <>
      <Section spacing="xl">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-6">Our mission</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-8 tracking-tight leading-tight">
              We&apos;re building the platform<br />
              <span className="text-secondary-400">teams actually love using.</span>
            </h1>
            <p className="text-xl text-secondary-500 leading-relaxed mb-6">
              ZRexHive was born out of frustration. We were tired of stitching together a dozen tools that never quite worked together, of paying for features we didn&apos;t need, and of slow platforms that couldn&apos;t keep up with our team&apos;s pace.
            </p>
            <p className="text-xl text-secondary-500 leading-relaxed">
              So in 2022, we built the platform we always wanted — one that&apos;s fast, focused, and built for teams who care deeply about their craft.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="sm">
        <Container>
          <div className="rounded-2xl overflow-hidden border border-neutral-200">
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="ZRexHive team working together"
              width={1200}
              height={480}
              className="w-full h-80 object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 tracking-tight">What we stand for</h2>
            <p className="text-lg text-secondary-500">These values guide every decision we make.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex h-2 w-2 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-secondary-500 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-neutral-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 tracking-tight">The team</h2>
            <p className="text-lg text-secondary-500">A small, focused team of builders who care deeply about their craft.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 text-lg font-bold mx-auto mb-3">{member.initials}</div>
                <p className="text-sm font-semibold text-neutral-900">{member.name}</p>
                <p className="text-xs text-secondary-500 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 tracking-tight">Come build with us</h2>
            <p className="text-lg text-secondary-500 mb-8 max-w-md mx-auto">We&apos;re always looking for talented people who care about craft, customers, and building something that lasts.</p>
            <div className="flex items-center justify-center gap-3">
              <Button variant="primary" size="lg" href="/careers">View open roles</Button>
              <Button variant="ghost" size="lg" href="/contact">Get in touch</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
