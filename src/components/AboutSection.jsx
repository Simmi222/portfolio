import React from 'react'
import { Code2, Database, Globe, Zap } from 'lucide-react'

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Development',
      desc: 'React, JavaScript, Tailwind CSS, Responsive Design'
    },
    {
      icon: Database,
      title: 'Backend Development',
      desc: 'Node.js, Express, Django, REST APIs, Databases'
    },
    {
      icon: Globe,
      title: 'Full Stack',
      desc: 'MERN Stack, Database Design, API Integration'
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      desc: 'DSA, Optimization, Clean Code, Git'
    },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-glow">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with a strong foundation in computer science. Currently pursuing my B.Tech at Ajay Kumar Garg Engineering College and working as a Backend Developer Intern at NextBigE.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I love building scalable applications and solving complex problems. With experience in both frontend and backend technologies, I create seamless user experiences with robust server architecture.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I'm learning new technologies, contributing to open source, and solving DSA problems on LeetCode.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-start gap-4">
                  <item.icon size={28} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
