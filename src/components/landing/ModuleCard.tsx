import { motion } from "framer-motion";
import { LucideIcon, CheckCircle2 } from "lucide-react";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  purpose: string;
  index: number;
  reversed?: boolean;
}

const ModuleCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  color,
  purpose,
  index,
  reversed = false,
}: ModuleCardProps) => {
  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    cyan: { bg: "bg-gleego-cyan/10", text: "text-gleego-cyan", border: "border-gleego-cyan/30" },
    blue: { bg: "bg-gleego-blue/10", text: "text-gleego-blue", border: "border-gleego-blue/30" },
    purple: { bg: "bg-gleego-purple/10", text: "text-gleego-purple", border: "border-gleego-purple/30" },
    green: { bg: "bg-gleego-green/10", text: "text-gleego-green", border: "border-gleego-green/30" },
    orange: { bg: "bg-gleego-orange/10", text: "text-gleego-orange", border: "border-gleego-orange/30" },
  };

  const colors = colorClasses[color] || colorClasses.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Content Side */}
      <div className={reversed ? "lg:order-2" : ""}>
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border mb-4`}>
          <Icon className={`w-4 h-4 ${colors.text}`} />
          <span className={`text-sm font-medium ${colors.text}`}>{subtitle}</span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-muted-foreground mb-6 text-lg">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              className="flex items-start gap-2"
            >
              <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Purpose Box */}
        <div className={`${colors.bg} ${colors.border} border rounded-xl p-4`}>
          <p className="text-sm">
            <span className="font-semibold text-foreground">👉 Função no ecossistema:</span>{" "}
            <span className="text-muted-foreground">{purpose}</span>
          </p>
        </div>
      </div>

      {/* Visual Side */}
      <div className={reversed ? "lg:order-1" : ""}>
        <div className={`glass-card p-8 ${colors.border} border relative overflow-hidden group`}>
          {/* Background Glow */}
          <div className={`absolute -top-20 -right-20 w-40 h-40 ${colors.bg} rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`} />
          
          {/* Icon Display */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className={`w-24 h-24 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
              <Icon className={`w-12 h-12 ${colors.text}`} />
            </div>
            <h4 className="font-display text-xl font-semibold mb-2">{title}</h4>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 left-4 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${colors.bg}`}
                style={{ opacity: 1 - i * 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
