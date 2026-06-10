import { ArrowRight, ExternalLink, Github } from "lucide-react";
import lilChatImg from "../assets/lilChat.png";
import crazylmsImg from "../assets/crazylms.png";
import bookstoreImg from "../assets/bookstore.png";

const projects = [
  {
    id: 1,
    title: "LilChat",
    description: "Full-stack social media platform inspired by Instagram with post sharing and user interaction features.",
    tags: ["React", "Django", "REST APIs", "PostgreSQL"],
    demoUrl: "https://lil-chat-xyet.vercel.app/",
    githubUrl: "https://github.com/Simmi222/LilChat",
    image: lilChatImg,
  },
  {
    id: 2,
    title: "Crazy LMS",
    description:
      "AI-powered learning course generator that creates structured courses from user prompts using OpenAI API.",
    tags: ["MERN", "OpenAI", "Authentication", "Cloud"],
    demoUrl: "https://lms-swart-nine.vercel.app/",
    githubUrl: "https://github.com/Simmi222/lms",
    image: crazylmsImg,
  },
  {
    id: 3,
    title: "Bookstore",
    description:
      "CRUD system for managing book inventory with responsive UI and seamless API integration.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    demoUrl: "https://bookstore-fronend-pw5a.vercel.app/",
    githubUrl: "https://github.com/Simmi222/bookstore-fronend",
    image: bookstoreImg,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary text-glow"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium border border-primary/30 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            target="_blank"
            href="https://github.com/Simmi222"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
