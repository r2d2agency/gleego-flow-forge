import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Bot, MessageSquare, Megaphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gleego-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gleego-purple/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 md:left-20 text-gleego-cyan/30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap size={40} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-10 md:right-32 text-gleego-purple/30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Users size={48} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-10 md:left-32 text-gleego-blue/30"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Bot size={44} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-10 md:right-20 text-gleego-green/30"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <MessageSquare size={36} />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Megaphone className="w-4 h-4 text-gleego-cyan" />
            <span className="text-sm text-muted-foreground">
              O ecossistema completo para suas vendas
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Universo</span>{" "}
            <span className="text-gradient">Gleego</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
          >
            Um ecossistema completo para{" "}
            <span className="text-gleego-cyan font-semibold">geração</span>,{" "}
            <span className="text-gleego-blue font-semibold">gestão</span> e{" "}
            <span className="text-gleego-purple font-semibold">conversão</span> de leads
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Da captação até a venda — todas as ferramentas conectadas em um único fluxo operacional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" className="group">
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Explorar Ferramentas
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/50"
          >
            {[
              { value: "5+", label: "Ferramentas Integradas" },
              { value: "24/7", label: "IA Operando" },
              { value: "100%", label: "Automatizado" },
              { value: "∞", label: "Possibilidades" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient font-display">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gleego-cyan rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
