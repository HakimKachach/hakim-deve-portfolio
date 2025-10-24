"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Fatima Al-Mansouri",
      role: "CEO, Dar El Fassi",
      content:
        "Hakim transformed our vision into a stunning digital experience. His attention to detail and understanding of our brand was exceptional. The website has significantly increased our bookings.",
      rating: 5,
      image: "/moroccan-woman-profile.jpg",
    },
    {
      id: 2,
      name: "Mohammed Bennani",
      role: "Founder, MyCaftan",
      content:
        "Working with Hakim was a game-changer for our e-commerce business. He built a platform that's not only beautiful but also converts visitors into customers. Highly recommended!",
      rating: 5,
      image: "/moroccan-man-profile.jpg",
    },
    {
      id: 3,
      name: "Leila Tazi",
      role: "Marketing Director, ArganNature",
      content:
        "Hakim's expertise in both design and development is rare. He delivered our project on time and within budget. The Stripe integration works flawlessly, and our customers love the experience.",
      rating: 5,
      image: "/moroccan-woman-business.jpg",
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
    <section className="py-20 bg-background">
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">What my clients say about working with me</p>
          </div>

          {/* Testimonials grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <Card className="p-8 border border-border hover:border-primary/50 transition-colors h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">"{testimonial.content}"</p>

                  {/* Client info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
