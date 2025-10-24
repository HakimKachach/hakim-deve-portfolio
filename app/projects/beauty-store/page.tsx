"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Leaf, Droplet, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BeautyStorePage() {
  const [cart, setCart] = useState([])
  const [selectedFilter, setSelectedFilter] = useState("all")

  const products = [
    {
      id: 1,
      name: "Pure Argan Oil",
      price: 34.99,
      image: "/moroccan-argan-oil-bottle-pure.jpg",
      category: "oils",
      benefits: ["Anti-aging", "Moisturizing", "100% Pure"],
      rating: 4.9,
    },
    {
      id: 2,
      name: "Argan Shampoo",
      price: 18.99,
      image: "/moroccan-argan-shampoo-bottle.jpg",
      category: "haircare",
      benefits: ["Strengthening", "Shine", "Natural"],
      rating: 4.7,
    },
    {
      id: 3,
      name: "Argan Face Cream",
      price: 42.99,
      image: "/moroccan-argan-face-cream-jar.jpg",
      category: "skincare",
      benefits: ["Hydrating", "Anti-wrinkle", "Organic"],
      rating: 4.8,
    },
    {
      id: 4,
      name: "Hammam Soap",
      price: 12.99,
      image: "/moroccan-hammam-soap-traditional.jpg",
      category: "skincare",
      benefits: ["Exfoliating", "Cleansing", "Traditional"],
      rating: 4.6,
    },
    {
      id: 5,
      name: "Argan Body Lotion",
      price: 24.99,
      image: "/moroccan-argan-body-lotion-bottle.jpg",
      category: "bodycare",
      benefits: ["Moisturizing", "Soft skin", "Fragrant"],
      rating: 4.8,
    },
    {
      id: 6,
      name: "Luxury Spa Set",
      price: 89.99,
      image: "/moroccan-luxury-spa-set-complete.jpg",
      category: "sets",
      benefits: ["Complete care", "Gift ready", "Premium"],
      rating: 5.0,
    },
  ]

  const categories = [
    { id: "all", name: "All Products" },
    { id: "oils", name: "Oils" },
    { id: "skincare", name: "Skincare" },
    { id: "haircare", name: "Haircare" },
    { id: "bodycare", name: "Bodycare" },
    { id: "sets", name: "Sets" },
  ]

  const filteredProducts = products.filter((p) => selectedFilter === "all" || p.category === selectedFilter)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">ArganNature</h1>
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-b from-green-100 to-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src="/moroccan-argan-tree-landscape.jpg" alt="ArganNature" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold">ArganNature</h2>
            <p className="text-xl">Premium Moroccan Beauty Products</p>
            <p className="text-lg opacity-90">100% Natural & Organic</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "100% Organic", desc: "Pure natural ingredients" },
              { icon: Droplet, title: "Argan Oil", desc: "Premium quality oil" },
              { icon: Award, title: "Certified", desc: "International standards" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedFilter === cat.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(cat.id)}
                className={selectedFilter === cat.id ? "bg-primary text-primary-foreground" : ""}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-border group">
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {product.benefits.map((benefit) => (
                        <span key={benefit} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
                    <Button
                      onClick={() => setCart([...cart, product])}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground">About ArganNature</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We source the finest argan oil directly from Moroccan cooperatives, supporting local communities while
              delivering premium beauty products to the world. Our commitment to sustainability and quality ensures
              every product meets the highest standards.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Learn More</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
