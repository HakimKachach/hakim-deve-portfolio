"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 md:pb-0"
    >
      {/* Moroccan geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="moroccan" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#moroccan)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-center md:text-left">
                Transforming Ideas into <span className="text-primary">Digital Experiences</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center md:text-left"
            >
              I'm Hakim Deve, a Moroccan full stack developer passionate about building websites, e-commerce platforms,
              and web apps that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 justify-center md:justify-start"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto">
                Explore My Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="px-6 md:px-8 py-5 md:py-6 text-sm md:text-base border-primary text-primary hover:bg-primary/10 bg-transparent w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Tech stack preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-6 md:pt-8 border-t border-border"
            >
              <p className="text-xs md:text-sm text-muted-foreground mb-3 text-center md:text-left">Tech Stack</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {["React", "Next.js", "Node.js", "MongoDB", "Stripe"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs md:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Developer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center mt-8 md:mt-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated gradient circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-3xl animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <Image
                    src="/moroccan-developer.jpg"
                    alt="Hakim Deve - Moroccan Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
