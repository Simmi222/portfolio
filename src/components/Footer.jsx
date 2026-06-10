import { ArrowUp, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg">
            Simaran <span className="text-primary">Sahu</span>
          </h3>

          <p className="text-sm text-muted-foreground mt-1">
            Full Stack Developer | Backend Developer | React & Django Developer
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center">
            © {new Date().getFullYear()} Simaran Sahu. Made with
            <Heart size={14} className="text-primary" />
            using React & Tailwind CSS
          </p>
        </div>

        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};