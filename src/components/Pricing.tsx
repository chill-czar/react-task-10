import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    highlight: false,
    features: ["200 AI generations", "Basic rewrite & summarize", "Community support"],
    cta: "Get started",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    highlight: true,
    features: ["Unlimited generations", "Custom tones & styles", "Priority support"],
    cta: "Start Pro",
  },
  {
    name: "Business",
    price: "$49",
    period: "/mo",
    highlight: false,
    features: ["Team workspaces", "Brand voice & templates", "SSO & admin controls"],
    cta: "Contact sales",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="container mx-auto py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
        <p className="mt-3 text-muted-foreground">Choose the plan that fits your workflow.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={t.highlight ? "rounded-xl p-[1px] bg-gradient-hero shadow-elegant" : ""}>
            <Card className={`h-full ${t.highlight ? "rounded-[calc(var(--radius)+0.25rem)]" : ""}`}>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span>{t.name}</span>
                  <span className="text-3xl font-bold">{t.price}<span className="text-base font-medium text-muted-foreground">{t.period}</span></span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={t.highlight ? "hero" : "secondary"}>{t.cta}</Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
