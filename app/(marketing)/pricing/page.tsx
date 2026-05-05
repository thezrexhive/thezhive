import type { Metadata } from "next";
import { CheckCircle, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import type { PricingPlan } from "@/types";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing. Start free and scale as you grow.",
};

const plans: PricingPlan[] = [
  {
    id: "free", name: "Free", description: "Perfect for individuals and small projects.", price: 0, priceSuffix: "forever", highlighted: false, ctaLabel: "Get started free",
    features: [
      { text: "Up to 3 projects", included: true },
      { text: "5 team members", included: true },
      { text: "Basic analytics", included: true },
      { text: "1GB storage", included: true },
      { text: "Community support", included: true },
      { text: "Advanced analytics", included: false },
      { text: "Priority support", included: false },
      { text: "Custom integrations", included: false },
    ],
  },
  {
    id: "pro", name: "Pro", description: "For growing teams that need more power.", price: 49, priceSuffix: "per month", highlighted: true, ctaLabel: "Start Pro trial",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Advanced analytics", included: true },
      { text: "50GB storage", included: true },
      { text: "Priority email support", included: true },
      { text: "Custom integrations", included: true },
      { text: "API access", included: true },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    id: "enterprise", name: "Enterprise", description: "For large organizations with compliance needs.", price: 199, priceSuffix: "per month", highlighted: false, ctaLabel: "Contact sales",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited storage", included: true },
      { text: "SSO & SAML", included: true },
      { text: "Audit logs", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "99.99% SLA", included: true },
      { text: "Custom contracts", included: true },
      { text: "On-premise option", included: true },
    ],
  },
];

const faqs = [
  { q: "Can I change my plan anytime?", a: "Yes. Changes take effect immediately for upgrades and at the next billing cycle for downgrades." },
  { q: "Is there a free trial for paid plans?", a: "Yes. Pro and Enterprise come with a 14-day free trial. No credit card required." },
  { q: "What payment methods do you accept?", a: "All major credit cards (Visa, Mastercard, Amex) and ACH transfers for annual enterprise contracts." },
  { q: "What happens to my data if I downgrade?", a: "Your data is always safe. Projects exceeding plan limits are archived (not deleted) and can be restored by upgrading." },
];

export default function PricingPage() {
  return (
    <>
      <Section spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-3">Pricing</p>
            <h1 className="text-5xl font-bold text-neutral-900 mb-4 tracking-tight">Simple, transparent pricing</h1>
            <p className="text-xl text-secondary-500">Start free. Upgrade when you&apos;re ready. No hidden fees, ever.</p>
          </div>
        </Container>
      </Section>

      <Section spacing="sm">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div key={plan.id} className={`relative flex flex-col rounded-2xl border p-8 ${plan.highlighted ? "border-primary-500 shadow-modal bg-white ring-1 ring-primary-500" : "border-neutral-200 bg-white shadow-card"}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-500 text-white">Most popular</span>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-neutral-900 mb-1">{plan.name}</h2>
                  <p className="text-sm text-secondary-500">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-neutral-900">${plan.price}</span>
                    <span className="text-secondary-500 text-sm">/ {plan.priceSuffix}</span>
                  </div>
                </div>
                <ul className="flex-1 space-y-3 mb-8" role="list">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2.5">
                      {feature.included
                        ? <CheckCircle className="h-4 w-4 text-success-500 shrink-0 mt-0.5" aria-label="Included" />
                        : <XCircle className="h-4 w-4 text-neutral-300 shrink-0 mt-0.5" aria-label="Not included" />}
                      <span className={`text-sm ${feature.included ? "text-secondary-700" : "text-secondary-400"}`}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? "primary" : "secondary"} fullWidth href={plan.id === "enterprise" ? "/contact" : "/onboarding/step-1"}>
                  {plan.ctaLabel}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-neutral-50">
        <Container size="md">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12 tracking-tight">Frequently asked questions</h2>
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-neutral-200 pb-8 last:border-0 last:pb-0">
                <dt className="text-base font-semibold text-neutral-900 mb-2">{faq.q}</dt>
                <dd className="text-sm text-secondary-500 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
}
