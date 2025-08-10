import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SiteFooter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email" });
      return;
    }
    toast({ title: "You're subscribed!", description: "Thanks for joining our newsletter." });
    setEmail("");
  };

  return (
    <footer className="border-t">
      <div className="container mx-auto py-12 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <h3 className="font-semibold">Nova AI</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Create, write, and plan faster with your AI workspace.
          </p>
          <form onSubmit={onSubmit} className="mt-6 flex gap-2 max-w-sm">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />
            <Button type="submit" variant="hero">Subscribe</Button>
          </form>
        </div>
        <div>
          <p className="text-sm font-medium">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-foreground">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">About</a></li>
            <li><a href="#" className="hover:text-foreground">Careers</a></li>
            <li><a href="#" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
            <li><a href="#" className="hover:text-foreground">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container mx-auto text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nova AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
