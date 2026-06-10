import { ArrowRight, ExternalLink, Github } from "lucide-react";
import lilChat from "@/assets/lilChat.png";
import crazylms from "@/assets/crazylms.png";
import bookstore from "@/assets/bookstore.png";
const projects = [
  {
    id: 1,
    title: "LilChat - Social Media Platform",
    description:
      "A full-stack social media application inspired by Instagram. Users can create posts, manage profiles, interact with content, and securely authenticate using Django REST APIs.",
    image: lilChat,
    tags: ["React", "Django", "REST API", "PostgreSQL"],
    demoUrl: "https://lil-chat-xyet.vercel.app/",
    githubUrl: "https://github.com/Simmi222/LilChat",
  },

  {
    id: 2,
    title: "LMS - AI Course Generator",
    description:
      "An AI-powered learning management system that generates structured learning courses from user prompts using OpenAI APIs. Includes authentication and course management features.",
    image: crazylms,
    tags: ["MERN", "OpenAI", "MongoDB", "Node.js"],
    demoUrl: "https://lms-swart-nine.vercel.app/",
    githubUrl: "https://github.com/Simmi222",
  },

  {
    id: 3,
    title: "Bookstore Management System",
    description:
      "A MERN stack CRUD application for managing books, inventory, and records with seamless frontend-backend integration using REST APIs.",
    image: bookstore,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/Simmi222",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my full-stack development projects showcasing my
          expertise in React, Django, Node.js, MongoDB, REST APIs, and AI
          integrations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-5">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
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
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Simmi222"
          >
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};