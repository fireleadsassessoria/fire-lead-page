import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Nossos clientes começam a ver os primeiros resultados em 7 a 14 dias. No primeiro mês, a maioria já consegue um aumento significativo no número de pedidos."
    },
    {
      question: "Preciso ter conhecimento em marketing?",
      answer: "Não! Esse é exatamente o motivo da FireLeads existir. Cuidamos de tudo para você: estratégia, execução e otimização. Você só precisa focar em preparar deliciosos pratos."
    },
    {
      question: "Qual o investimento necessário?",
      answer: "O investimento varia de acordo com o tamanho do seu delivery e seus objetivos. Após o diagnóstico gratuito, apresentamos um plano personalizado que cabe no seu orçamento."
    },
    {
      question: "Vocês trabalham com qual tipo de delivery?",
      answer: "Atendemos todos os tipos: hamburguerias, pizzarias, sushi, comida caseira, açaí, etc. Nossa especialidade é gastronomia, então se você vende comida, podemos te ajudar!"
    },
    {
      question: "E se eu já tentei fazer anúncios e não deu certo?",
      answer: "Esse é um dos casos mais comuns! A maioria dos donos de delivery não tem tempo nem conhecimento para otimizar campanhas. Nossa expertise está em criar anúncios que realmente convertem para o nicho gastronômico."
    },
    {
      question: "Tem contrato de fidelidade?",
      answer: "Trabalhamos com contratos flexíveis. Nosso objetivo é gerar tanto resultado que você nunca vai querer sair. A parceria é baseada em confiança e resultados reais."
    }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa saber antes de decolar com a FireLeads
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ainda tem dúvidas? Fale com a gente!
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToForm}
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};
