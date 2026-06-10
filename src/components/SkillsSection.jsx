import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "Java", level: 80, category: "languages" },
  { name: "C++", level: 75, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },

  // Frontend
  { name: "React.js", level: 90, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Responsive Design", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "Django", level: 82, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "JWT Auth", level: 85, category: "backend" },

  // Database
  { name: "MongoDB", level: 85, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "Database Design", level: 80, category: "database" },

  // Tools
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Vercel", level: 88, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "languages", "frontend", "backend", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-lg transition-colors duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-2">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
