import { motion } from "framer-motion";
import logoGleego from "@/assets/logo-gleego.webp";
import heroBg from "@/assets/hero-bg.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBg} type="video/mp4" />
      </video>
      
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Cyberpunk Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gleego-cyan/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gleego-pink/25 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gleego-purple/15 rounded-full blur-[150px]" />
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
      
      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo Gleego Central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src={logoGleego} 
              alt="Gleego" 
              className="h-24 md:h-32 lg:h-40 w-auto mx-auto drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]"
            />
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Universo</span>{" "}
            <span className="bg-gradient-to-r from-gleego-cyan via-gleego-pink to-gleego-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              Gleego
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto"
          >
            Um ecossistema completo para{" "}
            <span className="text-gleego-cyan font-semibold drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">geração</span>,{" "}
            <span className="text-gleego-green font-semibold drop-shadow-[0_0_10px_rgba(0,255,128,0.6)]">gestão</span> e{" "}
            <span className="text-gleego-pink font-semibold drop-shadow-[0_0_10px_rgba(255,0,128,0.6)]">conversão</span> de leads
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto"
          >
            Da captação até a venda — todas as ferramentas conectadas em um único fluxo operacional.
          </motion.p>

          {/* Stats com estilo cyberpunk */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gleego-cyan/20"
          >
            {[
              { value: "5", label: "Ferramentas Integradas", color: "text-gleego-cyan", glow: "drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" },
              { value: "24/7", label: "IA Operando", color: "text-gleego-green", glow: "drop-shadow-[0_0_10px_rgba(0,255,128,0.8)]" },
              { value: "100%", label: "Automatizado", color: "text-gleego-pink", glow: "drop-shadow-[0_0_10px_rgba(255,0,128,0.8)]" },
              { value: "∞", label: "Possibilidades", color: "text-gleego-purple", glow: "drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center glass p-4 rounded-lg border border-gleego-cyan/10 hover:border-gleego-cyan/30 transition-all duration-300"
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} ${stat.glow} font-display`}>
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
        <div className="w-6 h-10 rounded-full border-2 border-gleego-cyan/50 flex justify-center pt-2 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
          <div className="w-1.5 h-3 bg-gradient-to-b from-gleego-cyan to-gleego-pink rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
