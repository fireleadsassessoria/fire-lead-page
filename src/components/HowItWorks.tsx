import { Button } from "@/components/ui/button";
import { ClipboardCheck, Rocket, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Diagnóstico Gratuito",
      description: "Analisamos seu delivery e identificamos as principais oportunidades de crescimento."
    },
    {
      number: "02",
      icon: Rocket,
      title: "Estratégia Personalizada",
      description: "Criamos um plano de ação sob medida para o seu negócio começar a vender mais."
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Resultados Reais",
      description: "Você vê seu faturamento crescer enquanto cuidamos de todo o marketing digital."
    }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-[100px]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como Funciona a{" "}
            <span className="text-primary">Metodologia FireLeads</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e eficaz que já transformou dezenas de deliverys
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
                
                <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(14_100%_57%_/_0.2)] relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-6xl font-bold text-primary/20 mb-4">{step.number}</span>
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToForm}
          >
            Começar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
