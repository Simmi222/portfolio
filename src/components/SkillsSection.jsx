import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "C++", level: 85, category: "languages" },
  { name: "Java", level: 75, category: "languages" },
  { name: "Python", level: 80, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },

  // Frontend
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "Django", level: 85, category: "backend" },
  { name: "Django REST Framework", level: 80, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "JWT Authentication", level: 80, category: "backend" },

  // Database
  { name: "MongoDB", level: 85, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
  { name: "Canva", level: 90, category: "tools" },

  // Concepts
  { name: "Data Structures & Algorithms", level: 80, category: "concepts" },
  { name: "CRUD Operations", level: 90, category: "concepts" },
  { name: "API Integration", level: 90, category: "concepts" },
  { name: "Responsive Design", level: 90, category: "concepts" },
  { name: "Version Control", level: 85, category: "concepts" },
];

const categories = [
  "languages",
  "frontend",
  "backend",
  "database",
  "tools",
  "concepts",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to build scalable web applications,
          backend systems, APIs, and modern user experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold">
                  {skill.name}
                </h3>

                <span className="text-primary text-sm font-medium">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};