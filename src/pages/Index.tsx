import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <LeadForm />
      <Problems />
      <Services />
      <HowItWorks />
      <FAQ />

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 FireLeads - Assessoria de Marketing para Gastronomia</p>
          <p className="text-sm mt-2">
            Transformando deliverys em máquinas de vendas
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
