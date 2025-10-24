"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Camera, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PhotographyPortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [wishlist, setWishlist] = useState([])

  const categories = [
    { id: "all", name: "All Work" },
    { id: "portraits", name: "Portraits" },
    { id: "weddings", name: "Weddings" },
    { id: "events", name: "Events" },
    { id: "landscapes", name: "Landscapes" },
  ]

  const portfolio = [
    {
      id: 1,
      title: "Golden Hour Portrait",
      category: "portraits",
      image: "/photography-golden-hour-portrait.jpg",
      description: "Capturing the beauty of natural light",
    },
    {
      id: 2,
      title: "Wedding Ceremony",
      category: "weddings",
      image: "/photography-wedding-ceremony.jpg",
      description: "A beautiful moment of two souls",
    },
    {
      id: 3,
      title: "Corporate Event",
      category: "events",
      image: "/photography-corporate-event.jpg",
      description: "Professional event photography",
    },
    {
      id: 4,
      title: "Mountain Landscape",
      category: "landscapes",
      image: "/photography-mountain-landscape.jpg",
      description: "Nature's majestic beauty",
    },
    {
      id: 5,
      title: "Studio Portrait",
      category: "portraits",
      image: "/photography-studio-portrait.jpg",
      description: "Professional studio photography",
    },
    {
      id: 6,
      title: "Beach Wedding",
      category: "weddings",
      image: "/photography-beach-wedding.jpg",
      description: "Romance by the seaside",
    },
    {
      id: 7,
      title: "Concert Photography",
      category: "events",
      image: "/photography-concert-event.jpg",
      description: "Capturing live moments",
    },
    {
      id: 8,
      title: "Desert Sunset",
      category: "landscapes",
      image: "/photography-desert-sunset.jpg",
      description: "Golden dunes at sunset",
    },
  ]

  const filteredPortfolio = portfolio.filter((item) => selectedCategory === "all" || item.category === selectedCategory)

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Photographer Casa</h1>
          <Camera className="w-5 h-5 text-foreground" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src="/photography-hero-camera.jpg" alt="Photography" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold">Photographer Casa</h2>
            <p className="text-xl">Capturing moments, creating memories</p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id ? "bg-primary text-primary-foreground" : ""}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-border group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart
                          className={`w-8 h-8 ${
                            wishlist.includes(item.id) ? "fill-red-500 text-red-500" : "text-white"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 10 years of experience in professional photography, I specialize in capturing life's most
              precious moments. From intimate portraits to grand wedding celebrations, I bring creativity and passion to
              every project.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Book a Session</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
