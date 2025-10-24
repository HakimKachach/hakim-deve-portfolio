"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function EcommerceSections() {
  const ecommerceProjects = [
    {
      id: 1,
      title: "ModeChic",
      description: "Moroccan fashion store featuring traditional and modern clothing with full payment integration",
      stack: "React, Node.js, Stripe API",
      url: "https://modechic.ma",
      image: "/placeholder.svg?key=2gsy0",
    },
    {
      id: 2,
      title: "ElectroMaroc",
      description: "Electronics retail platform with inventory management and real-time order tracking",
      stack: "Next.js, MongoDB, Stripe",
      url: "https://electromaroc.ma",
      image: "/placeholder.svg?key=s9m5g",
    },
    {
      id: 3,
      title: "BioShop",
      description: "Natural products marketplace specializing in organic and eco-friendly items",
      stack: "React, Express, MySQL",
      url: "https://bioshop.ma",
      image: "/placeholder.svg?key=3jol5",
    },
    {
      id: 4,
      title: "Decorina",
      description: "Home decor store showcasing Moroccan artisan crafts and interior design pieces",
      stack: "Next.js, Node.js, Stripe",
      url: "https://decorina.ma",
      image: "/placeholder.svg?key=ww7jx",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="ecommerce" className="py-20 bg-card">
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">E-commerce Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized e-commerce solutions with payment integration and inventory management
            </p>
          </div>

          {/* E-commerce grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {ecommerceProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-border hover:border-primary/50 h-full flex flex-col">
                  {/* Project image */}
                  <div className="relative h-56 bg-muted overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Project content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{project.description}</p>

                    {/* Tech stack */}
                    <div className="mb-6 pb-6 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-2">Tech Stack</p>
                      <p className="text-sm font-medium text-foreground">{project.stack}</p>
                    </div>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Voir le projet
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
