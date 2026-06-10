import { ArrowDown, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="animate-fade-in">Hi, I'm</span>
            <span className="text-primary animate-fade-in-delay-1">
              {" "}Simaran
            </span>
            <span className="text-gradient ml-2 animate-fade-in-delay-2">
              {" "}Sahu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-delay-3">
            Full-Stack Developer | MERN Specialist | Problem Solver. I create modern, responsive web applications with React, Node.js, and cloud technologies.
          </p>

          <div className="pt-4 animate-fade-in-delay-4 flex gap-4 justify-center">
            <a href="#projects" className="cosmic-button flex items-center justify-center gap-2 group">
              View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
