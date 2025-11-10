"use client";

import React from 'react';
import Autoscroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from 'next/image';

const brands = [
  { name: 'Honda', logo: 'https://cdn.worldvectorlogo.com/logos/honda-9.svg' },
  { name: 'Yamaha', logo: 'https://i.imgur.com/DrxNY6p.png' },
  { name: 'Suzuki', logo: 'https://i.imgur.com/DrxNY6p.png' },
  { name: 'Kawasaki', logo: 'https://cdn.worldvectorlogo.com/logos/kawasaki-logo-1.svg' },
  { name: 'Dafra', logo: 'https://i.imgur.com/3XOpkIa.png' },
  { name: 'Shineray', logo: 'https://i.imgur.com/KAY4a56.jpeg' },
  { name: 'Haojue', logo: 'https://i.imgur.com/DMRdcie.png' },
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
          plugins={[
            Autoscroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {[...brands, ...brands].map((brand, index) => (
              <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center items-center">
                <div className="p-4 filter grayscale hover:filter-none transition-all duration-300 opacity-75 hover:opacity-100 cursor-pointer h-28 flex items-center" title={brand.name}>
                  <Image src={brand.logo} alt={brand.name} width={150} height={50} className="object-contain max-h-12 w-auto" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
