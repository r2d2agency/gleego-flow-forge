import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Logo */}
          <div className="font-display text-2xl font-bold text-gradient">
            Gleego
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Ferramentas
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Preços
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Gleego. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
