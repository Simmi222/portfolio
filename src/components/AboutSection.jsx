import { Code, Server, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer & Backend Developer
            </h3>

            <p className="text-muted-foreground">
              I'm Simaran Sahu, a passionate Full Stack Developer and B.Tech
              Computer Science Engineering student at Ajay Kumar Garg
              Engineering College. I enjoy building modern, responsive, and
              scalable web applications using React, Node.js, Express.js,
              MongoDB, Django, and REST APIs.
            </p>

            <p className="text-muted-foreground">
              Currently working as a Backend Developer Intern at NextBigE, where
              I develop REST APIs using Django REST Framework. I have built
              multiple full-stack projects including LilChat, Crazy LMS, and
              Bookstore while continuously improving my problem-solving skills
              through Data Structures and Algorithms.
            </p>

            <p className="text-muted-foreground">
              I am passionate about creating impactful digital products,
              learning new technologies, and contributing to innovative
              solutions that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full Stack Development
                  </h4>

                  <p className="text-muted-foreground">
                    Building responsive and scalable web applications using
                    React.js, Node.js, Express.js, MongoDB, Django and REST
                    APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend Development
                  </h4>

                  <p className="text-muted-foreground">
                    Developing secure APIs, authentication systems, database
                    models and server-side applications using Django REST
                    Framework and Express.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    DSA & Problem Solving
                  </h4>

                  <p className="text-muted-foreground">
                    Solving coding challenges and improving algorithmic thinking
                    through LeetCode, Data Structures, and competitive
                    programming concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Cards */}
        </div>
      </div>
    </section>
  );
};