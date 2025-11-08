import { cn } from "@/lib/utils";

export function JMLogo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-block font-headline uppercase", className)}>
      <span className="text-primary text-3xl font-black">JM</span>
      <span className="text-foreground dark:text-background text-2xl font-bold ml-2">Moto Peças</span>
    </div>
  );
}
