"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BeautyCartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pure Argan Oil", price: 34.99, quantity: 1, image: "/moroccan-argan-oil-bottle-pure.jpg" },
    { id: 3, name: "Argan Face Cream", price: 42.99, quantity: 1, image: "/moroccan-argan-face-cream-jar.jpg" },
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/projects/beauty-store"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Shop</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Shopping Cart</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <Card className="p-12 text-center border border-border">
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <Link href="/projects/beauty-store">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Continue Shopping</Button>
                </Link>
              </Card>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-6 border border-border flex gap-6">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                        <p className="text-primary font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <div>
            <Card className="p-6 border border-border sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold text-foreground mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link href="/projects/beauty-store/checkout">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Proceed to Checkout
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
