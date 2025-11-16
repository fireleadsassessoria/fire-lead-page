import { Button } from "@/components/ui/button";
import { Target, Heart, ShoppingCart, RefreshCw } from "lucide-react";
export const HowItWorks = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const steps = [{
    number: "01",
    icon: Target,
    title: "Aquisição",
    description: "Entendemos a persona do cliente, exibimos a marca para o público qualificado e adquirimos uma base de clientes."
  }, {
    number: "02",
    icon: Heart,
    title: "Relacionamento",
    description: "Desenvolvemos relacionamento com a base adquirida, criamos conexão com os potenciais clientes e quebramos objeções."
  }, {
    number: "03",
    icon: ShoppingCart,
    title: "Venda",
    description: "Definimos a jornada de compra, geramos a oportunidade de vendas e concluímos a venda."
  }, {
    number: "04",
    icon: RefreshCw,
    title: "Retenção",
    description: "Geramos recorrência de compra, focamos na experiência do cliente e expomos pontos atrativos."
  }];
  return <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-[100px]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Método Fire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo completo que transforma seu delivery em uma máquina de vendas
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && index % 2 === 0 && <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />}
                
                <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(14_100%_57%_/_0.2)] relative z-10 mx-[5px] my-[26px]">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-6xl font-bold text-primary/20 mb-4">{step.number}</span>
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            Começar Agora
          </Button>
        </div>
      </div>
    </section>;
};