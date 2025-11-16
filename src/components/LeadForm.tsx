import { useState, type FormEvent } from "react";
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
    revenue: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const revenueOptions = [
<<<<<<< HEAD
=======
    "Até R$20.000",
>>>>>>> 760a3925bb378c7388534ece3f9469441b3cc26e
    "R$20.000 - R$50.000",
    "R$50.000 - R$100.000",
    "Mais de R$100.000",
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.whatsapp ||
      !formData.instagram ||
      !formData.revenue
    ) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mgvrpnjw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Mensagem enviada com sucesso! 🎉");

<<<<<<< HEAD
=======
        // Reset form
>>>>>>> 760a3925bb378c7388534ece3f9469441b3cc26e
        setFormData({
          name: "",
          whatsapp: "",
          instagram: "",
          revenue: "",
        });
      } else {
        toast.error(
          "Algo deu errado ao enviar. Tente novamente em alguns instantes."
        );
      }
    } catch (error) {
      toast.error(
        "Não foi possível enviar agora. Verifique sua conexão e tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
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
              <span className="text-primary">Escalar suas Vendas?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário e converse conosco sobre como escalar o
              faturamento do seu restaurante!
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whatsapp: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      instagram: e.target.value,
                    })
                  }
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-3">
                <Label>Faturamento Médio Mensal *</Label>
<<<<<<< HEAD
                <div className="grid grid-cols-3 gap-3">
=======
                <div className="grid grid-cols-2 gap-3">
>>>>>>> 760a3925bb378c7388534ece3f9469441b3cc26e
                  {revenueOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          revenue: option,
                        })
                      }
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
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-5 w-5 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  "Agende uma reunião"
                )}
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
