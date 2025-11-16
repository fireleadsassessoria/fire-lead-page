import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingDown, Users, DollarSign } from "lucide-react";

export const Problems = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  const problems = [
    {
      icon: TrendingDown,
      title: "Vendas Estagnadas",
      description: "Seu delivery não cresce e você não sabe o que fazer para aumentar o faturamento."
    },
    {
      icon: DollarSign,
      title: "Dinheiro Jogado Fora",
      description: "Já tentou fazer anúncios sozinho mas só gastou dinheiro sem retorno real."
    },
    {
      icon: Users,
      title: "Poucos Clientes",
      description: "Seu delivery tem potencial mas faltam clientes novos para fazer decolar."
    },
    {
      icon: AlertCircle,
      title: "Sem Estratégia Clara",
      description: "Você sabe que precisa de marketing, mas não sabe por onde começar."
    }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Você está Perdendo Dinheiro{" "}
            <span className="text-primary">Todos os Dias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enquanto seus concorrentes crescem, você continua preso nos mesmos problemas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(14_100%_57%_/_0.2)]"
            >
              <problem.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToForm}
          >
            Quero Resolver Isso Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
