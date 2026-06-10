import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 md:pt-32"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* Intro */}
          <div>
            <p className="text-primary font-medium mb-4 opacity-0 animate-fade-in">
              Welcome to my Portfolio
            </p>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in">
                Hi, I'm
              </span>

              <br />

              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Simaran
              </span>

              <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-2">
                Sahu
              </span>
            </h1>
          </div>

          {/* Role */}
          <div className="opacity-0 animate-fade-in-delay-2">
            <h2 className="text-xl md:text-3xl font-semibold">
              Full Stack Developer | Backend Developer
            </h2>

            <p className="text-primary mt-2">
              React • Node.js • Django • MongoDB • REST APIs
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
            Passionate Computer Science Engineering student and Full Stack
            Developer with experience in building scalable web applications,
            REST APIs, and modern user interfaces. Currently working as a
            Backend Developer Intern and actively seeking opportunities to
            create impactful software solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>

            <a
              href="/Simaran_Sahu_Resume.pdf"
              download
              className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://github.com/Simmi222"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300"
            >
              <Github size={20} className="text-primary" />
            </a>

            <a
              href="https://www.linkedin.com/in/simaran-sahu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300"
            >
              <Linkedin size={20} className="text-primary" />
            </a>

            <a
              href="mailto:simaransahu4@gmail.com"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300"
            >
              <Mail size={20} className="text-primary" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold text-primary">3+</h3>
              <p className="text-sm text-muted-foreground">
                Full Stack Projects
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold text-primary">2</h3>
              <p className="text-sm text-muted-foreground">
                Internships
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold text-primary">
                Top 40
              </h3>
              <p className="text-sm text-muted-foreground">
                AKTU Innovation Hub
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-bold text-primary">
                2nd Prize
              </h3>
              <p className="text-sm text-muted-foreground">
                IDE Bootcamp
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll Down
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};