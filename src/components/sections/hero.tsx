import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { JMLogo } from "@/components/logo";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center text-center p-0 bg-foreground">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-white container mx-auto px-4 flex flex-col items-center">
         <div className="absolute top-0 py-6">
            <Link href="/" aria-label="Página Inicial">
                <JMLogo />
            </Link>
         </div>
        <div className="max-w-4xl">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight drop-shadow-md">
            Peças Originais para Sua Moto com Preço de Atacarejo
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90 drop-shadow-sm">
            Qualidade garantida, entrega rápida e atendimento especializado para você e sua oficina
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="font-bold text-lg">
              <Link href="#produtos">
                Ver Catálogo Completo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
