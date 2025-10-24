"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Heart, Star, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FashionEcommercePage() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      name: "Traditional Caftan",
      price: 89.99,
      image: "/traditional-moroccan-caftan-dress-embroidered.jpg",
      category: "caftans",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Silk Djellaba",
      price: 79.99,
      image: "/moroccan-djellaba-robe-silk.jpg",
      category: "djellabas",
      rating: 4.6,
      reviews: 98,
    },
    {
      id: 3,
      name: "Embroidered Takchita",
      price: 129.99,
      image: "/moroccan-takchita-dress-embroidered-gold.jpg",
      category: "caftans",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      name: "Beaded Babouche",
      price: 34.99,
      image: "/moroccan-beaded-babouche-slippers.jpg",
      category: "accessories",
      rating: 4.7,
      reviews: 87,
    },
    {
      id: 5,
      name: "Silk Headwrap",
      price: 24.99,
      image: "/moroccan-silk-headwrap-hijab.jpg",
      category: "accessories",
      rating: 4.5,
      reviews: 62,
    },
    {
      id: 6,
      name: "Luxury Caftan Set",
      price: 199.99,
      image: "/moroccan-luxury-caftan-set-with-accessories.jpg",
      category: "caftans",
      rating: 5.0,
      reviews: 203,
    },
  ]

  const categories = [
    { id: "all", name: "All Products" },
    { id: "caftans", name: "Caftans" },
    { id: "djellabas", name: "Djellabas" },
    { id: "accessories", name: "Accessories" },
  ]

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleWishlist = (productId) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
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
          <h1 className="text-2xl font-bold text-foreground">MyCaftan</h1>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-primary/20 to-secondary/20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src="/moroccan-fashion-traditional-clothing-display.jpg" alt="MyCaftan" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold">MyCaftan</h2>
            <p className="text-xl">Authentic Moroccan Fashion</p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
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
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-foreground"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                    <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
                    <Button
                      onClick={() => addToCart(product)}
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

      {/* Newsletter */}
      <section className="py-16 bg-primary/10 border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-foreground">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground">Get exclusive offers and new collection updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
