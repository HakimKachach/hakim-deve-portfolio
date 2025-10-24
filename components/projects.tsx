"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Dar El Fassi",
      description: "Elegant showcase website for a traditional Moroccan riad with booking system",
      type: "Site Vitrine",
      url: "https://darelfassi.ma",
      image: "/moroccan-riad-website.jpg",
      internalLink: "/projects/moroccan-riad",
    },
    {
      id: 2,
      title: "MyCaftan",
      description: "E-commerce platform for traditional Moroccan clothing with Stripe integration",
      type: "E-commerce",
      url: "https://mycaftan.ma",
      image: "/moroccan-fashion-ecommerce.jpg",
      internalLink: "/projects/fashion-ecommerce",
    },
    {
      id: 3,
      title: "ArganNature",
      description: "Premium beauty products store featuring organic Moroccan argan oil",
      type: "E-commerce",
      url: "https://argannature.ma",
      image: "/beauty-products-store.jpg",
      internalLink: "/projects/beauty-store",
    },
    {
      id: 4,
      title: "TechMaroc",
      description: "Technology blog platform with content management system",
      type: "Blog",
      url: "https://techmaroc.ma",
      image: "/tech-blog-website.jpg",
      internalLink: "/projects/tech-blog",
    },
    {
      id: 5,
      title: "TravelInMorocco",
      description: "Tourism landing page showcasing Morocco's beautiful destinations",
      type: "Landing Page",
      url: "https://travelinmorocco.ma",
      image: "/travel-morocco-landing.jpg",
      internalLink: "/projects/travel-morocco",
    },
    {
      id: 6,
      title: "AdminX Maroc",
      description: "Comprehensive admin dashboard for business management",
      type: "Dashboard",
      url: "https://adminxmaroc.ma",
      image: "/admin-dashboard.jpg",
      internalLink: "/projects/admin-dashboard",
    },
    {
      id: 7,
      title: "Morocco Eats",
      description: "Mobile app showcase for food delivery service in Morocco",
      type: "Mobile App",
      url: "https://moroccoeats.ma",
      image: "/food-delivery-app.jpg",
      internalLink: "/projects/food-delivery",
    },
    {
      id: 8,
      title: "Photographer Casa",
      description: "Professional portfolio website for a Casablanca-based photographer",
      type: "Portfolio",
      url: "https://photocasa.ma",
      image: "/photography-portfolio.jpg",
      internalLink: "/projects/photography-portfolio",
    },
    {
      id: 9,
      title: "Solarify Maroc",
      description: "Startup website for renewable energy solutions in Morocco",
      type: "Startup",
      url: "https://solarify.ma",
      image: "/solar-energy-startup.jpg",
      internalLink: "/projects/solarify-startup",
    },
    {
      id: 10,
      title: "LearnHub Maroc",
      description: "Educational platform for online courses and skill development",
      type: "Platform",
      url: "https://learnhub.ma",
      image: "/online-learning-platform.jpg",
      internalLink: "/projects/learnhub-platform",
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
    <section id="projects" className="py-20 bg-background">
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Explore My Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of diverse projects showcasing my expertise in web development
            </p>
          </div>

          {/* Projects grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col border border-border hover:border-primary/50 group">
                  <Link href={project.internalLink} className="relative h-48 bg-muted overflow-hidden block">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>

                  {/* Project content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex gap-2">
                      <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href={project.internalLink}>
                          View Live Project
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="icon">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
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
