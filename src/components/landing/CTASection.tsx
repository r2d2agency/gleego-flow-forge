import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gleego-cyan/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gleego-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gleego-cyan to-gleego-purple mb-8"
          >
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pronto para transformar sua{" "}
            <span className="text-gradient">operação comercial?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Conecte todas as etapas da jornada do cliente em um único ecossistema. 
            Da captação à conversão, tudo automatizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              <Sparkles className="w-5 h-5" />
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Falar com Especialista
            </Button>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-12 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Empresas que já transformaram suas vendas com a Gleego
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {["Empresa 1", "Empresa 2", "Empresa 3", "Empresa 4", "Empresa 5"].map(
                (company) => (
                  <div
                    key={company}
                    className="text-lg font-semibold text-muted-foreground"
                  >
                    {company}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
