import { Button } from "@/components/ui/button";
import { Target, Menu, HeartHandshake, Sparkles } from "lucide-react";

export const Services = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Target,
      title: "Tráfego Pago Especializado",
      description: "Anúncios otimizados no Google e Instagram que trazem clientes famintos pelo seu delivery. ROI garantido.",
      benefits: ["Campanhas testadas", "Segmentação precisa", "Resultados em 7 dias"]
    },
    {
      icon: Menu,
      title: "Cardápio Digital Próprio",
      description: "Seu próprio sistema de pedidos online. Fuja das taxas abusivas do iFood (até 30%!) e tenha controle total das suas vendas.",
      benefits: ["Zero taxas de marketplace", "100% do lucro é seu", "Marca própria independente"]
    },
    {
      icon: HeartHandshake,
      title: "Sucesso do Cliente",
      description: "Acompanhamento próximo e estratégias para fidelizar seus clientes e aumentar o ticket médio.",
      benefits: ["Suporte dedicado", "Análise de métricas", "Planos de ação mensais"]
    },
    {
      icon: Sparkles,
      title: "Direcionamento de Conteúdo",
      description: "Criamos e gerenciamos conteúdo que engaja, educa e converte seguidores em clientes.",
      benefits: ["Posts planejados", "Stories que vendem", "Reels virais"]
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Solução Completa para{" "}
            <span className="text-primary">Seu Delivery Decolar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa em um único lugar. Sem complicação, só resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:shadow-[0_0_30px_hsl(14_100%_57%_/_0.4)] transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToForm}
          >
            Quero Esses Resultados
          </Button>
        </div>
      </div>
    </section>
  );
};
