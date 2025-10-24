"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Sun, Zap, Leaf, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function SolarifyStartupPage() {
  const [selectedTab, setSelectedTab] = useState("solutions")

  const solutions = [
    {
      id: 1,
      title: "Residential Solar",
      description: "Complete solar solutions for homes",
      image: "/solarify-residential-solar-panels.jpg",
      benefits: ["Reduce electricity bills", "Eco-friendly", "Government incentives"],
      price: "Starting at $5,000",
    },
    {
      id: 2,
      title: "Commercial Solar",
      description: "Large-scale solar installations for businesses",
      image: "/solarify-commercial-solar-installation.jpg",
      benefits: ["Lower operating costs", "Tax credits", "Scalable"],
      price: "Custom quote",
    },
    {
      id: 3,
      title: "Solar Storage",
      description: "Battery storage systems for energy independence",
      image: "/solarify-solar-battery-storage.jpg",
      benefits: ["24/7 power", "Backup during outages", "Energy independence"],
      price: "Starting at $8,000",
    },
  ]

  const stats = [
    { label: "Installations", value: "500+", icon: Sun },
    { label: "Energy Saved", value: "2.5M kWh", icon: Zap },
    { label: "CO2 Reduced", value: "1,200 tons", icon: Leaf },
    { label: "Customer Satisfaction", value: "98%", icon: Award },
  ]

  const testimonials = [
    {
      name: "Hassan Ahmed",
      role: "Homeowner",
      text: "Solarify transformed my energy bills. Highly recommended!",
      image: "/moroccan-man-profile.jpg",
    },
    {
      name: "Fatima Bennani",
      role: "Business Owner",
      text: "Professional service and excellent results. Worth every penny.",
      image: "/moroccan-woman-profile.jpg",
    },
    {
      name: "Mohammed Alaoui",
      role: "Factory Manager",
      text: "Reduced our operational costs significantly. Great investment.",
      image: "/moroccan-man-profile.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Solarify Maroc</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-b from-yellow-400 to-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src="/solarify-solar-panels-sunset.jpg" alt="Solarify" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold">Solarify Maroc</h2>
            <p className="text-xl">Renewable Energy Solutions for Morocco</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-border group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                    <ul className="space-y-2 mb-6">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg font-bold text-primary mb-4">{solution.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Quote</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Customer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border border-border">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground">Ready to Go Solar?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of Moroccan families and businesses saving money with solar energy
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Sun className="w-4 h-4 mr-2" />
                Get Free Consultation
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
