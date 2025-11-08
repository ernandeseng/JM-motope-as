import Link from "next/link";
import { JMLogo } from "./logo";
import { Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/icons/social";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-center md:text-left">
          {/* Coluna 1 */}
          <div className="flex flex-col items-center md:items-start">
            <JMLogo />
            <p className="max-w-xs text-sm mt-4">
              Sua loja de confiança em peças para motos.
            </p>
          </div>
          {/* Coluna 2 */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4 uppercase text-background">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
              <li><Link href="#produtos" className="hover:text-accent transition-colors">Catálogo</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Formas de Pagamento</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Política de Troca</Link></li>
            </ul>
          </div>
          {/* Coluna 3 */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4 uppercase text-background">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>contato@jmmotopecas.com.br</span>
              </li>
            </ul>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                <Link href="#" aria-label="Instagram"><InstagramIcon className="w-6 h-6 hover:text-accent transition-colors" /></Link>
                <Link href="#" aria-label="Facebook"><FacebookIcon className="w-6 h-6 hover:text-accent transition-colors" /></Link>
                <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon className="w-6 h-6 hover:text-accent transition-colors" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>© 2024 JM Moto Peças Atacarejo - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
