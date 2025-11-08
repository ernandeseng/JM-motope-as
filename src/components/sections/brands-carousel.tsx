"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HondaLogo, YamahaLogo, SuzukiLogo, KawasakiLogo, DafraLogo, ShinerayLogo, TraxxLogo, HaojueLogo } from "@/components/icons/brands";

const brands = [
  { name: 'Honda', logo: <HondaLogo /> },
  { name: 'Yamaha', logo: <YamahaLogo /> },
  { name: 'Suzuki', logo: <SuzukiLogo /> },
  { name: 'Kawasaki', logo: <KawasakiLogo /> },
  { name: 'Dafra', logo: <DafraLogo /> },
  { name: 'Shineray', logo: <ShinerayLogo /> },
  { name: 'Traxx', logo: <TraxxLogo /> },
  { name: 'Haojue', logo: <HaojueLogo /> },
];

export function BrandsCarouselSection() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Marcas que Trabalhamos
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="basis-1/3 md:basis-1/5 lg:basis-1/8 flex justify-center">
                <div className="p-4 filter grayscale hover:filter-none transition-all duration-300 opacity-75 hover:opacity-100 cursor-pointer" title={brand.name}>
                  {brand.logo}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
