"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <Link href="/projects/fashion-ecommerce">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Continue Shopping</Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/projects/fashion-ecommerce/cart"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Checkout</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-6">
              {/* Shipping Info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card className="p-6 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-4">Shipping Address</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="md:col-span-2 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      className="md:col-span-2 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </Card>
              </motion.div>

              {/* Payment Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="p-6 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-4">Payment Method</h2>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-primary/5">
                      <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                      <span className="text-foreground">Credit Card</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-primary/5">
                      <input type="radio" name="payment" className="w-4 h-4" />
                      <span className="text-foreground">PayPal</span>
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="md:col-span-2 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 border border-border sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>$249.97</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>$26.00</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold text-foreground mb-6">
                <span>Total</span>
                <span>$285.97</span>
              </div>
              <Button
                onClick={handlePlaceOrder}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Place Order
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
