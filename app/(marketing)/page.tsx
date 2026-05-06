import Image from "next/image";
import { ArrowRight, ChartBar as BarChart3, Shield, Zap, Users, Globe, CircleCheck as CheckCircle, Star as Stars } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { Overline, Hero, Body } from "@/components/ui/Typography";

const features = [
  { icon: BarChart3,   title: "Real-time Analytics",     description: "Deep insights into every metric that matters. Track performance, engagement, and growth across your entire organization.", badgeVariant: "purple" as const, iconBg: "bg-tint-purple", iconColor: "text-primary-600" },
  { icon: Zap,         title: "Blazing Fast",             description: "Built on modern infrastructure to handle millions of requests. Your team moves fast — your platform should too.",          badgeVariant: "yellow" as const, iconBg: "bg-tint-yellow", iconColor: "text-yellow-700" },
  { icon: Users,       title: "Team Collaboration",       description: "Work together seamlessly. Shared workspaces, granular permissions, and real-time updates keep everyone aligned.",           badgeVariant: "pink"   as const, iconBg: "bg-tint-pink",   iconColor: "text-pink-600"  },
  { icon: Shield,      title: "Enterprise Security",      description: "SOC 2 Type II certified. End-to-end encryption, SSO, audit logs, and role-based access controls built in.",                badgeVariant: "blue"   as const, iconBg: "bg-tint-blue",   iconColor: "text-blue-500"  },
  { icon: Globe,       title: "Global Infrastructure",    description: "Deployed across 15 regions worldwide. 99.99% uptime SLA with automatic failover and edge caching.",                        badgeVariant: "purple" as const, iconBg: "bg-tint-purple", iconColor: "text-primary-600" },
  { icon: CheckCircle, title: "Seamless Integrations",    description: "Connect with 200+ tools your team already uses. Slack, GitHub, Jira, Salesforce — everything works together.",             badgeVariant: "yellow" as const, iconBg: "bg-tint-yellow", iconColor: "text-yellow-700" },
];

const stats = [
  { value: "10k+",   label: "Teams worldwide" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "200+",   label: "Integrations" },
  { value: "4.9/5",  label: "Average rating" },
];

const testimonials = [
  { quote: "ZRexHive completely transformed how our engineering team ships. We went from weekly deploys to shipping 10x per day.", author: "Sarah Chen",    role: "VP Engineering",  company: "Meridian Labs", avatar: "SC", borderColor: "border-primary-400" },
  { quote: "The analytics alone justified the switch. We found three revenue leaks in our first week and fixed them immediately.",  author: "Marcus Johnson", role: "Head of Growth",   company: "Vertex.io",    avatar: "MJ", borderColor: "border-pink-400"    },
  { quote: "Best SaaS decision we made this year. The onboarding was smooth, the product is fast, and support is exceptional.",    author: "Priya Mehta",    role: "CTO",             company: "Foundry AI",   avatar: "PM", borderColor: "border-yellow-400"  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="xl" className="overflow-hidden relative">
        {/* Background blobs — large ambient lights */}
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] blob bg-primary-300/50" aria-hidden="true" />
        <div className="absolute top-10 right-1/4 w-[380px] h-[380px] blob bg-pink-300/50" aria-hidden="true" />
        <div className="absolute top-40 left-1/2 w-[300px] h-[300px] blob bg-blue-200/40" aria-hidden="true" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative">
            <Badge variant="yellow" dot className="mb-8">
              <Stars className="h-3 w-3 mr-1" aria-hidden="true" />
              Now with AI-powered insights
            </Badge>
            <Hero className="mb-6" gradient="full">
              The platform that scales with you
            </Hero>
            <Body size="lg" className="mb-10 max-w-2xl mx-auto">
              ZRexHive gives modern teams the analytics, collaboration, and infrastructure tools to move from idea to production — and beyond.
            </Body>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="primary" size="lg" href="/onboarding/step-1" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Start for free
              </Button>
              <Button variant="secondary" size="lg" href="/pricing">View pricing</Button>
            </div>
            <p className="mt-4 text-sm text-neutral-400">No credit card required · Free plan available · Cancel anytime</p>
          </div>

          <div className="mt-16 relative">
            <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-modal">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="ZRexHive dashboard preview"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-50/80 to-transparent pointer-events-none" />
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section spacing="sm" className="border-y border-neutral-100/60 bg-white/40 backdrop-blur-sm">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-3xl font-bold text-gradient-pp mb-1">{stat.value}</dt>
                <dd className="text-sm text-neutral-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Features */}
      <Section id="features" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Overline className="mb-3">Features</Overline>
            <h2 className="text-title font-semibold tracking-tight text-neutral-900 mb-4">Everything your team needs</h2>
            <Body>Purpose-built tools that integrate seamlessly, so you can focus on building — not maintaining.</Body>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-3xl border border-white/70 bg-white/60 backdrop-blur-sm hover:border-primary-200 hover:bg-white/80 hover:shadow-card-hover transition-all duration-200 group"
                >
                  <div className={`h-10 w-10 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`h-5 w-5 ${feature.iconColor}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Divider className="max-w-container mx-auto px-6" />

      {/* Testimonials */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Overline className="mb-3">Testimonials</Overline>
            <h2 className="text-title font-semibold tracking-tight text-neutral-900 mb-4">Loved by teams that ship</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <blockquote key={t.author} className={`bg-white/60 backdrop-blur-sm rounded-3xl border-t-4 ${t.borderColor} border border-white/70 p-6 shadow-card`}>
                <p className="text-sm text-neutral-700 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-gradient-pp flex items-center justify-center text-white text-sm font-semibold shrink-0">
                    {t.avatar}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{t.author}</p>
                    <p className="text-xs text-neutral-500">{t.role}, {t.company}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="md">
        <Container size="md">
          <div className="relative rounded-3xl bg-gradient-pp px-8 py-16 text-center overflow-hidden">
            {/* Blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-pink-400/30 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-primary-300/30 blur-3xl" aria-hidden="true" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_white_0%,_transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Ready to build something great?</h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">Join 10,000+ teams using ZRexHive to ship faster and scale confidently.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button variant="yellow" size="lg" href="/onboarding/step-1" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Get started free
                </Button>
                <Button variant="ghost" size="lg" href="/pricing" className="text-white hover:bg-white/10 hover:text-white">
                  See all plans
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
