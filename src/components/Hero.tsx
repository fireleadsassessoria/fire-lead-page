import { Button } from "@/components/ui/button";
import logo from "@/assets/fireleads-logo.png";
export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <img src={logo} alt="FireLeads Logo" className="w-[600px] h-auto mb-4 drop-shadow-[0_0_40px_rgba(211,47,47,0.6)]" />
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Transforme seu Delivery em uma{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Máquina de Vendas
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Assessoria especializada em marketing para gastronomia. Aumente seu faturamento no cardápio próprio e salão com estratégias comprovadas.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="hero" size="lg" onClick={scrollToForm} className="min-w-[200px]">
              Quero Crescer Agora
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToForm} className="min-w-[200px]">
              Saber Mais
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-12 text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">+80</span>
              <span className="text-sm">Negócios Atendidos</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">300%</span>
              <span className="text-sm">Crescimento Médio</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">R$5M+</span>
              <span className="text-sm">Gerado em Vendas</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};