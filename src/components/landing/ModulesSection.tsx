import { motion } from "framer-motion";
import ModuleCard from "./ModuleCard";
import {
  FileText,
  Search,
  MessageSquare,
  Bot,
  Megaphone,
} from "lucide-react";

const modules = [
  {
    icon: FileText,
    title: "FormFlow Builder",
    subtitle: "Captura Inteligente",
    description:
      "Ferramenta focada em entrada de leads. Crie formulários estilo Typeform, conversacionais, tradicionais e páginas de Link na Bio.",
    features: [
      "Formulários estilo Typeform",
      "Formulários conversacionais",
      "Páginas de Link na Bio",
      "Captura de leads parciais",
      "Recuperação de abandono",
      "Webhooks e integrações",
    ],
    color: "cyan",
    purpose: "Coletar dados e enviar os leads diretamente para o CRM.",
  },
  {
    icon: Search,
    title: "Garimpador Gleego",
    subtitle: "Prospecção Ativa",
    description:
      "Ferramenta de extração ativa de contatos no Instagram e Google. Você não espera o lead chegar — você vai atrás dele.",
    features: [
      "Busca no Instagram (perfis, seguidores)",
      "Busca no Google (empresas, localização)",
      "Captura nome, bio, links, telefones",
      "Deduplicação automática",
      "Exportação de listas",
      "Controle de volume",
    ],
    color: "blue",
    purpose: "Gerar oportunidades comerciais sem depender de tráfego ou anúncios.",
  },
  {
    icon: MessageSquare,
    title: "Whats.r2bot",
    subtitle: "CRM Inteligente com WhatsApp",
    description:
      "O coração comercial da Gleego. Centraliza atendimento, CRM, automação, marketing e inteligência em uma única plataforma.",
    features: [
      "Chat unificado multi-WhatsApp",
      "CRM em formato Kanban",
      "Chatbots visuais",
      "Campanhas em massa",
      "Lead Scoring e análise preditiva",
      "Revenue Intelligence",
    ],
    color: "purple",
    purpose: "Organizar leads, conduzir conversas, gerenciar funil e fechar vendas.",
  },
  {
    icon: Bot,
    title: "Zaipher-IA",
    subtitle: "Agentes de Inteligência Artificial",
    description:
      "Plataforma de criação de agentes de IA sob medida. Secretária, SDR, vendedor, atendimento — todos operando 24/7.",
    features: [
      "Atendimento automático",
      "Perguntas estratégicas",
      "Qualificação de leads",
      "Agendamento de reuniões",
      "Envio de catálogos",
      "Tom de voz personalizado",
    ],
    color: "orange",
    purpose: "Assumir tarefas operacionais humanas e acelerar decisões comerciais.",
  },
  {
    icon: Megaphone,
    title: "Blaster",
    subtitle: "Disparo de Mensagens em Massa",
    description:
      "Sistema profissional de campanhas via WhatsApp. Reative contatos, faça remarketing e comunique em escala.",
    features: [
      "Criação de campanhas",
      "Agendamento inteligente",
      "Controle de velocidade",
      "Respeito a horário comercial",
      "Templates multimídia",
      "Logs detalhados",
    ],
    color: "green",
    purpose: "Reativar contatos, fazer remarketing e comunicar em escala.",
  },
];

const ModulesSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gleego-cyan/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gleego-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gleego-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Conheça as <span className="text-gradient">ferramentas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada módulo foi projetado para resolver uma etapa específica — 
            todos integrados para máxima eficiência.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="space-y-24">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.title}
              {...module}
              index={index}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
