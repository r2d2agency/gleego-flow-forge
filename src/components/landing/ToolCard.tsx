import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, LucideIcon } from "lucide-react";

export interface ToolData {
  icon?: LucideIcon;
  logoUrl?: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  purpose: string;
  accessUrl: string;
}

interface ToolCardProps extends ToolData {
  index: number;
}

const ToolCard = ({
  icon: Icon,
  logoUrl,
  title,
  subtitle,
  description,
  features,
  color,
  purpose,
  accessUrl,
  index,
}: ToolCardProps) => {
  const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    cyan: { 
      bg: "bg-gleego-cyan/10", 
      text: "text-gleego-cyan", 
      border: "border-gleego-cyan/30",
      gradient: "from-gleego-cyan/20 to-transparent"
    },
    blue: { 
      bg: "bg-gleego-blue/10", 
      text: "text-gleego-blue", 
      border: "border-gleego-blue/30",
      gradient: "from-gleego-blue/20 to-transparent"
    },
    green: { 
      bg: "bg-gleego-green/10", 
      text: "text-gleego-green", 
      border: "border-gleego-green/30",
      gradient: "from-gleego-green/20 to-transparent"
    },
    orange: { 
      bg: "bg-gleego-orange/10", 
      text: "text-gleego-orange", 
      border: "border-gleego-orange/30",
      gradient: "from-gleego-orange/20 to-transparent"
    },
    pink: { 
      bg: "bg-gleego-pink/10", 
      text: "text-gleego-pink", 
      border: "border-gleego-pink/30",
      gradient: "from-gleego-pink/20 to-transparent"
    },
    purple: { 
      bg: "bg-gleego-purple/10", 
      text: "text-gleego-purple", 
      border: "border-gleego-purple/30",
      gradient: "from-gleego-purple/20 to-transparent"
    },
  };

  const colors = colorClasses[color] || colorClasses.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass-card overflow-hidden group hover:border-opacity-50 transition-all duration-500 ${colors.border} border`}
    >
      {/* Gradient Top Bar */}
      <div className={`h-1 bg-gradient-to-r ${colors.gradient}`} />
      
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          {/* Logo or Icon */}
          <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
            {logoUrl ? (
              <img 
                src={logoUrl} 
                alt={`${title} logo`} 
                className="w-10 h-10 object-contain"
              />
            ) : Icon ? (
              <Icon className={`w-8 h-8 ${colors.text}`} />
            ) : (
              <div className={`w-8 h-8 rounded-lg ${colors.bg}`} />
            )}
          </div>
          
          <div className="flex-1">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.border} border mb-2`}>
              <span className={`text-xs font-medium ${colors.text}`}>{subtitle}</span>
            </div>
            <h3 className="font-display text-2xl font-bold">{title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features Grid */}
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
              <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Purpose Box */}
        <div className={`${colors.bg} ${colors.border} border rounded-xl p-4 mb-6`}>
          <p className="text-sm">
            <span className="font-semibold text-foreground">👉 Função:</span>{" "}
            <span className="text-muted-foreground">{purpose}</span>
          </p>
        </div>

        {/* Access Button */}
        <Button
          variant="heroOutline"
          className={`w-full ${colors.border} ${colors.text} hover:${colors.bg}`}
          asChild
        >
          <a href={accessUrl} target="_blank" rel="noopener noreferrer">
            Acessar {title}
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ToolCard;
