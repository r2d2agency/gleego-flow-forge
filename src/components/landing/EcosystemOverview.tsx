import { motion } from "framer-motion";
import { 
  Target, 
  MessageCircle, 
  Bot, 
  Megaphone,
  ArrowRight,
  Layers
} from "lucide-react";

const modules = [
  {
    icon: Target,
    title: "Captação & Prospecção",
    description: "Onde os contatos nascem",
    color: "gleego-cyan",
  },
  {
    icon: MessageCircle,
    title: "CRM & Conversa",
    description: "Onde o lead vira relacionamento",
    color: "gleego-blue",
  },
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description: "Onde a operação ganha escala",
    color: "gleego-purple",
  },
  {
    icon: Megaphone,
    title: "Ativação & Remarketing",
    description: "Onde a base volta a gerar vendas",
    color: "gleego-green",
  },
];

const EcosystemOverview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Layers className="w-4 h-4 text-gleego-cyan" />
            <span className="text-sm text-muted-foreground">Visão Geral</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Uma jornada completa, <span className="text-gradient">integrada</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada módulo resolve uma parte específica da jornada do cliente — 
            conectados em um único fluxo operacional.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Lines - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gleego-cyan via-gleego-purple to-gleego-green opacity-30 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="glass-card p-6 h-full hover:border-gleego-cyan/50 transition-all duration-300 hover:-translate-y-1">
                  {/* Number Badge */}
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-${module.color} flex items-center justify-center text-sm font-bold text-primary-foreground`}>
                    {index + 1}
                  </div>
                  
                  <div className={`w-14 h-14 rounded-xl bg-${module.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className={`w-7 h-7 text-${module.color}`} />
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {module.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {module.description}
                  </p>
                </div>

                {/* Arrow between cards - Desktop */}
                {index < modules.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-muted-foreground/50">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Central Platform Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass-card px-8 py-4">
            <p className="text-muted-foreground">
              A <span className="text-gleego-cyan font-semibold">Gleego</span> é a plataforma central que conecta todas as ferramentas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemOverview;
