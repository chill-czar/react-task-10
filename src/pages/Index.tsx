import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Nova AI",
    description: "All‑in‑one AI workspace to write, plan, and create faster.",
    brand: { "@type": "Brand", name: "Nova" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "49",
      priceCurrency: "USD",
      offerCount: 3,
      offers: [
        { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Starter" },
        { "@type": "Offer", price: "19", priceCurrency: "USD", name: "Pro" },
        { "@type": "Offer", price: "49", priceCurrency: "USD", name: "Business" },
      ],
    },
  };

  return (
    <>
      <Hero />
      <main>
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <SiteFooter />
      <link rel="canonical" href="/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
};

export default Index;
