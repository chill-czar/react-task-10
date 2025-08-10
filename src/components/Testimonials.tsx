import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const testimonials = [
  {
    name: "Emma Chen",
    role: "Product Manager",
    avatar: avatar1,
    quote: "Nova AI saves me hours each week. Brainstorm to publish is now a single session.",
  },
  {
    name: "Liam Patel",
    role: "Software Engineer",
    avatar: avatar2,
    quote: "The rewrite tool nails my tone. I use it for specs, docs, and emails.",
  },
  {
    name: "Sophia Martinez",
    role: "Marketing Lead",
    avatar: avatar3,
    quote: "From ideas to campaigns in minutes. Our team loves the templates!",
  },
  {
    name: "Noah Williams",
    role: "Founder",
    avatar: avatar4,
    quote: "The best AI assistant I’ve tried. It actually understands context.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by modern teams</h2>
        <p className="mt-3 text-muted-foreground">Real stories from people shipping faster with Nova.</p>
      </div>

      <div className="relative">
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ align: "start" }}>
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full glass-surface shadow-elegant">
                  <CardContent className="p-6 flex h-full flex-col">
                    <p className="text-sm">“{t.quote}”</p>
                    <div className="mt-6 flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={t.avatar} alt={`Avatar of ${t.name}`} />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
