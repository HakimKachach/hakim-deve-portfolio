"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function About() {
  const technologies = [
    { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
    { category: "Backend", skills: ["Node.js", "Express", "MongoDB", "MySQL"] },
    { category: "CMS & Tools", skills: ["WordPress", "Stripe API", "Git", "Tailwind CSS"] },
  ]

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full stack developer from Morocco with expertise in building modern web applications
            </p>
          </div>

          {/* About content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Profile info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-lg opacity-20" />

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Hakim Deve</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full stack developer from Morocco with a deep love for creating beautiful, functional
                  digital experiences. With expertise in modern web technologies, I specialize in building responsive
                  websites, e-commerce platforms, and web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in web development started with a curiosity about how things work on the internet. Today, I
                  combine technical expertise with creative problem-solving to deliver solutions that exceed
                  expectations.
                </p>
              </div>
            </motion.div>

            {/* Right - Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {technologies.map((tech, index) => (
                <Card
                  key={tech.category}
                  className="p-6 border border-border hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-bold text-foreground mb-4">{tech.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
