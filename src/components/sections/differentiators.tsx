import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck, Truck, CircleDollarSign, Headset } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-accent" strokeWidth={1.5}/>,
    title: "Peças Originais Garantidas",
    description: "Trabalhamos apenas com peças originais e de primeira linha.",
  },
  {
    icon: <Truck className="w-12 h-12 text-accent" strokeWidth={1.5}/>,
    title: "Entrega Rápida",
    description: "Agilidade na separação e envio dos seus pedidos.",
  },
  {
    icon: <CircleDollarSign className="w-12 h-12 text-accent" strokeWidth={1.5}/>,
    title: "Preço de Atacarejo",
    description: "Melhores preços do mercado para você e sua oficina.",
  },
  {
    icon: <Headset className="w-12 h-12 text-accent" strokeWidth={1.5}/>,
    title: "Atendimento Especializado",
    description: "Equipe técnica pronta para te ajudar a encontrar a peça certa.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Por Que Comprar na JM Moto Peças?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-card shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <CardTitle className="font-bold text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
