import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { ShimmerButton } from "../ui/shimmer-button";

const products = [
  {
    id: "product-footpeg",
    name: "Pedaleira Traseiro Completa CG/Titan 125",
  },
  {
    id: "product-headlight",
    name: "Farol Completo Titan 2000",
  },
  {
    id: "product-taillight",
    name: "Lanterna Traseira Completa Titan 2000 Vermelha",
  },
  {
    id: "product-dashboard",
    name: "Painel Completo Titan KS 2000/08",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="produtos" className="bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const productImage = PlaceHolderImages.find(p => p.id === product.id);
            return (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <CardContent className="p-0 flex flex-col items-center text-center flex-grow">
                  {productImage && (
                    <div className="w-full aspect-square bg-muted">
                      <Image
                        src={productImage.imageUrl}
                        alt={productImage.description}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={productImage.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow w-full items-center">
                    <h3 className="font-bold text-lg mb-4 flex-grow">{product.name}</h3>
                    <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="mt-auto">
                      <ShimmerButton borderRadius="0.5rem">
                          <span className="whitespace-pre-wrap text-center text-sm font-bold leading-none tracking-tight text-accent-foreground">
                            Falar com um Vendedor
                          </span>
                      </ShimmerButton>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
