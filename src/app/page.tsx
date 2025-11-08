import { BrandsCarouselSection } from "@/components/sections/brands-carousel";
import { DifferentiatorsSection } from "@/components/sections/differentiators";
import { FeaturedProductsSection } from "@/components/sections/featured-products";
import { HeroSection } from "@/components/sections/hero";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhatsAppCTASection } from "@/components/sections/whatsapp-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProductsSection />
      <BrandsCarouselSection />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <WhatsAppCTASection />
      <Footer />
    </main>
  );
}
