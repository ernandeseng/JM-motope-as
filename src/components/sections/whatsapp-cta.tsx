import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/social";
import Link from "next/link";

export function WhatsAppCTASection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
            <WhatsAppIcon className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            Atendimento Direto pelo WhatsApp
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Tire suas dúvidas, faça orçamentos e finalize suas compras de forma rápida e fácil.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg gap-2">
                <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-6 h-6" />
                    Chamar no WhatsApp
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
