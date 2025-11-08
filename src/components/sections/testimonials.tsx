import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "avatar-1",
    name: "João Silva",
    testimonial: "Atendimento nota 10! Encontrei todas as peças que precisava para minha oficina com preço justo. A entrega foi super rápida. Recomendo!",
    rating: 5,
  },
  {
    id: "avatar-2",
    name: "Maria Oliveira",
    testimonial: "A qualidade das peças é impressionante. Comprei um kit de transmissão e minha moto parece nova. Com certeza comprarei de novo.",
    rating: 5,
  },
  {
    id: "avatar-3",
    name: "Carlos Santos",
    testimonial: "Finalmente um lugar que tem preço de atacado para peças originais. A equipe me ajudou a escolher o item certo. Virei cliente fiel.",
    rating: 5,
  },
];

function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${index < rating ? "text-accent fill-accent" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          O Que Dizem Nossos Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => {
            const avatarImage = PlaceHolderImages.find(p => p.id === item.id);
            return (
              <Card key={item.name} className="bg-card shadow-lg flex flex-col">
                <CardContent className="p-8 text-center flex flex-col items-center flex-grow">
                   {avatarImage && (
                    <Avatar className="w-20 h-20 mb-4 border-2 border-accent">
                      <AvatarImage src={avatarImage.imageUrl} alt={avatarImage.description} data-ai-hint={avatarImage.imageHint} />
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <StarRating rating={item.rating} className="mb-4" />
                  <blockquote className="text-muted-foreground italic mb-6 flex-grow">&quot;{item.testimonial}&quot;</blockquote>
                  <h3 className="font-bold text-lg mt-auto">{item.name}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
