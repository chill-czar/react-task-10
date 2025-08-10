import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Abstract AI gradient waves background illustration"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      <nav className="container mx-auto flex items-center justify-between py-6">
        <a href="#" className="font-semibold tracking-tight">
          Nova AI
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
        </div>
      </nav>

      <div className="container mx-auto flex flex-col items-center text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
          Write, plan, and create faster with AI
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Nova AI is your all‑in‑one workspace for brainstorming, drafting, and polishing content — from documents to marketing copy.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Button size="lg" variant="hero">
            Start free <ArrowRight className="ml-1" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#pricing">See pricing</a>
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">No credit card required</p>
      </div>
    </header>
  );
};

export default Hero;
