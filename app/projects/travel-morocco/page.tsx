"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TravelMoroccoPage() {
  const [selectedDestination, setSelectedDestination] = useState(null)

  const destinations = [
    {
      id: 1,
      name: "Marrakech",
      image: "/travel-marrakech-medina-square.jpg",
      description: "Experience the vibrant energy of Morocco's red city",
      highlights: ["Jemaa el-Fnaa Square", "Koutoubia Mosque", "Bahia Palace"],
      rating: 4.9,
      price: 1200,
    },
    {
      id: 2,
      name: "Fez",
      image: "/travel-fez-medina-ancient.jpg",
      description: "Explore the world's oldest continuously inhabited city",
      highlights: ["Ancient Medina", "Al Quaraouiyine University", "Leather Tanneries"],
      rating: 4.8,
      price: 1100,
    },
    {
      id: 3,
      name: "Casablanca",
      image: "/travel-casablanca-hassan-mosque.jpg",
      description: "Discover Morocco's modern coastal metropolis",
      highlights: ["Hassan II Mosque", "Corniche Beach", "Old Medina"],
      rating: 4.7,
      price: 1000,
    },
    {
      id: 4,
      name: "Sahara Desert",
      image: "/travel-sahara-desert-dunes-sunset.jpg",
      description: "Experience the magic of the golden dunes",
      highlights: ["Camel Trekking", "Berber Camp", "Stargazing"],
      rating: 5.0,
      price: 1500,
    },
    {
      id: 5,
      name: "Chefchaouen",
      image: "/travel-chefchaouen-blue-city.jpg",
      description: "Wander through the enchanting blue-painted streets",
      highlights: ["Blue Medina", "Ras El Maa Waterfall", "Mountain Views"],
      rating: 4.9,
      price: 900,
    },
    {
      id: 6,
      name: "Essaouira",
      image: "/travel-essaouira-coastal-beach.jpg",
      description: "Relax on pristine beaches with Atlantic breezes",
      highlights: ["Beach Relaxation", "Seafood Dining", "Windsurfing"],
      rating: 4.8,
      price: 1050,
    },
  ]

  const packages = [
    { duration: "3 Days", price: 899, description: "Quick city escape" },
    { duration: "7 Days", price: 1599, description: "Complete experience" },
    { duration: "14 Days", price: 2799, description: "Ultimate adventure" },
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
          <h1 className="text-2xl font-bold text-foreground">Travel in Morocco</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-b from-orange-400 to-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src="/travel-morocco-hero-landscape.jpg" alt="Travel Morocco" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold">Discover Morocco</h2>
            <p className="text-xl">Unforgettable journeys through ancient lands</p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Travel Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center border border-border hover:border-primary/50 transition">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.duration}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <p className="text-4xl font-bold text-primary mb-6">${pkg.price}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Book Now</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Popular Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-border group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dest.image || "/placeholder.svg"}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{dest.name}</h3>
                      <span className="text-sm font-bold text-primary">{dest.rating}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{dest.description}</p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Highlights:</p>
                      <ul className="space-y-1">
                        {dest.highlights.map((highlight) => (
                          <li key={highlight} className="text-xs text-muted-foreground flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary">From ${dest.price}</p>
                      <Button variant="ghost" size="sm" className="text-primary">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground">Ready for Your Adventure?</h2>
            <p className="text-lg text-muted-foreground">Contact us today to plan your perfect Moroccan getaway</p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Trip
              </Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
