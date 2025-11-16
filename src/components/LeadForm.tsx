import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Flame } from "lucide-react";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    instagram: "",
    revenue: ""
  });

  const revenueOptions = [
    "Até R$20.000",
    "R$20.000 - R$50.000",
    "R$50.000 - R$100.000",
    "Mais de R$100.000"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.whatsapp || !formData.instagram || !formData.revenue) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Format WhatsApp message
    const message = `🔥 *Novo Lead FireLeads* 🔥

*Nome:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Instagram:* ${formData.instagram}
*Faturamento:* ${formData.revenue}

Lead capturado via Landing Page`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMessage}`; // Substitua pelo seu número
    
    toast.success("Redirecionando para o WhatsApp...");
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setFormData({
      name: "",
      whatsapp: "",
      instagram: "",
      revenue: ""
    });
  };

  return (
    <section id="form" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 shadow-[0_0_40px_hsl(14_100%_57%_/_0.4)]">
              <Flame className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pronto para{" "}
              <span className="text-primary">Triplicar suas Vendas?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário e receba um diagnóstico gratuito do seu delivery
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-[0_10px_60px_hsl(14_100%_57%_/_0.1)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram da Empresa *</Label>
                <Input
                  id="instagram"
                  type="text"
                  placeholder="@seudelivery"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-3">
                <Label>Faturamento Médio Mensal *</Label>
                <div className="grid grid-cols-2 gap-3">
                  {revenueOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, revenue: option })}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        formData.revenue === option
                          ? "border-primary bg-primary/10 text-primary font-semibold"
                          : "border-border bg-background hover:border-primary/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                className="w-full"
              >
                Receber Diagnóstico Gratuito
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Ao enviar, você concorda em receber contato via WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
