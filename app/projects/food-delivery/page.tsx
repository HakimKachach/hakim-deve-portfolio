"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Star, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FoodDeliveryPage() {
  const [cart, setCart] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const restaurants = [
    {
      id: 1,
      name: "Tagine House",
      image: "/food-delivery-tagine-restaurant.jpg",
      cuisine: "Moroccan",
      rating: 4.8,
      deliveryTime: "25-35 min",
      deliveryFee: "$2.99",
      minOrder: "$15",
    },
    {
      id: 2,
      name: "Couscous Palace",
      image: "/food-delivery-couscous-restaurant.jpg",
      cuisine: "Moroccan",
      rating: 4.7,
      deliveryTime: "30-40 min",
      deliveryFee: "$3.99",
      minOrder: "$20",
    },
    {
      id: 3,
      name: "Kebab Express",
      image: "/food-delivery-kebab-restaurant.jpg",
      cuisine: "Mediterranean",
      rating: 4.6,
      deliveryTime: "20-30 min",
      deliveryFee: "$1.99",
      minOrder: "$10",
    },
    {
      id: 4,
      name: "Pizza Maroc",
      image: "/food-delivery-pizza-restaurant.jpg",
      cuisine: "Italian",
      rating: 4.9,
      deliveryTime: "25-35 min",
      deliveryFee: "$2.49",
      minOrder: "$12",
    },
    {
      id: 5,
      name: "Burger Spot",
      image: "/food-delivery-burger-restaurant.jpg",
      cuisine: "American",
      rating: 4.5,
      deliveryTime: "15-25 min",
      deliveryFee: "$1.99",
      minOrder: "$8",
    },
    {
      id: 6,
      name: "Sushi Paradise",
      image: "/food-delivery-sushi-restaurant.jpg",
      cuisine: "Japanese",
      rating: 4.8,
      deliveryTime: "35-45 min",
      deliveryFee: "$4.99",
      minOrder: "$25",
    },
  ]

  const menuItems = [
    { id: 1, name: "Chicken Tagine", price: 12.99, image: "/food-delivery-chicken-tagine.jpg" },
    { id: 2, name: "Beef Couscous", price: 14.99, image: "/food-delivery-beef-couscous.jpg" },
    { id: 3, name: "Vegetable Pastilla", price: 10.99, image: "/food-delivery-vegetable-pastilla.jpg" },
    { id: 4, name: "Lamb Kofta", price: 13.99, image: "/food-delivery-lamb-kofta.jpg" },
  ]

  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Morocco Eats</h1>
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
      <section className="relative h-80 bg-gradient-to-r from-orange-500 to-red-500 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src="/food-delivery-hero-food.jpg" alt="Morocco Eats" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold">Morocco Eats</h2>
            <p className="text-xl">Delicious food delivered to your door</p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search restaurants or cuisines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Popular Restaurants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant, idx) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-border group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{restaurant.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{restaurant.cuisine}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{restaurant.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {restaurant.deliveryTime}
                      </div>
                    </div>
                    <div className="space-y-2 mb-4 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Delivery:</span> {restaurant.deliveryFee}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Min Order:</span> {restaurant.minOrder}
                      </p>
                    </div>
                    <Button
                      onClick={() => setSelectedRestaurant(restaurant.id)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      View Menu
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      {selectedRestaurant && (
        <section className="py-20 bg-primary/5 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Menu Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border border-border">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-foreground mb-2">{item.name}</h4>
                      <p className="text-lg font-bold text-primary mb-3">${item.price}</p>
                      <Button
                        onClick={() => setCart([...cart, item])}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
