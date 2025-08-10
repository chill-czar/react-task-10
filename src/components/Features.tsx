import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, PenTool, BrainCircuit, Rocket } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI that understands context",
    description: "Nova adapts to your tone and intent to produce content that sounds like you.",
  },
  {
    icon: PenTool,
    title: "Rewrite & expand",
    description: "Quickly iterate with rewrite, summarize, and expand tools built into your flow.",
  },
  {
    icon: BrainCircuit,
    title: "Brainstorm with prompts",
    description: "Go from idea to outline with smart prompts for blogs, emails, docs, and more.",
  },
  {
    icon: Rocket,
    title: "Export anywhere",
    description: "Copy or export content to your favorite tools without breaking formatting.",
  },
];

const Features = () => {
  return (
    <section id="features" className="container mx-auto py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Powerful features</h2>
        <p className="mt-3 text-muted-foreground">Everything you need to go from idea to publish — in minutes.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card key={f.title} className="glass-surface shadow-elegant transition-transform duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <f.icon />
              </div>
              <CardTitle className="mt-2 text-xl">{f.title}</CardTitle>
              <CardDescription>{f.description}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
