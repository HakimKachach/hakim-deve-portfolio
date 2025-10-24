"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Star, Phone, Mail, Home, Zap, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function MoroccanRiadPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [guests, setGuests] = useState(1)
  const [activeTab, setActiveTab] = useState("overview")

  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: 150,
      image: "/luxury-moroccan-bedroom-with-zellige-tiles.jpg",
      features: ["King Bed", "Private Bathroom", "Courtyard View", "Air Conditioning"],
      rating: 4.8,
    },
    {
      id: 2,
      name: "Standard Room",
      price: 100,
      image: "/traditional-moroccan-room-with-arches.jpg",
      features: ["Double Bed", "Shared Bathroom", "Garden View", "Ceiling Fan"],
      rating: 4.6,
    },
    {
      id: 3,
      name: "Family Suite",
      price: 200,
      image: "/spacious-moroccan-family-suite-with-multiple-beds.jpg",
      features: ["2 Bedrooms", "Private Bathroom", "Living Area", "Terrace"],
      rating: 4.9,
    },
  ]

  const amenities = [
    { icon: "🍽️", name: "Traditional Breakfast", desc: "Authentic Moroccan breakfast included" },
    { icon: "🏊", name: "Courtyard Pool", desc: "Refreshing pool in the central courtyard" },
    { icon: "📚", name: "Library", desc: "Curated collection of travel books" },
    { icon: "🧘", name: "Spa Services", desc: "Traditional hammam and massage" },
    { icon: "🍵", name: "Tea Lounge", desc: "Complimentary mint tea service" },
    { icon: "🎨", name: "Art Gallery", desc: "Local Moroccan artwork on display" },
  ]

  const stats = [
    { label: "Rooms", value: "12" },
    { label: "Rating", value: "4.8★" },
    { label: "Guests/Year", value: "2000+" },
    { label: "Staff", value: "15" },
  ]

  const features = [
    { icon: <Home className="w-6 h-6" />, title: "Authentic Design", desc: "Traditional Moroccan architecture" },
    { icon: <Zap className="w-6 h-6" />, title: "Modern Amenities", desc: "Contemporary comfort & technology" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Staff", desc: "Multilingual hospitality team" },
    { icon: <Award className="w-6 h-6" />, title: "Award Winning", desc: "Recognized for excellence" },
  ]

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "rooms", label: "Rooms" },
    { id: "amenities", label: "Amenities" },
    { id: "contact", label: "Contact" },
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
          <h1 className="text-2xl font-bold text-foreground">Dar El Fassi</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-b from-primary/20 to-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src="/beautiful-moroccan-riad-courtyard-with-zellige-til.jpg"
            alt="Dar El Fassi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold">Dar El Fassi</h2>
            <p className="text-xl">Experience Authentic Moroccan Hospitality</p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="w-5 h-5" />
              <span>Fez, Morocco</span>
            </div>
          </motion.div>
        </div>
      </section>

      {activeTab === "overview" && (
        <>
          {/* Stats Section */}
          <section className="py-12 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Dar El Fassi</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-lg bg-primary/5 border border-border hover:border-primary/50 transition text-center"
                  >
                    <div className="flex justify-center mb-3 text-primary">{feature.icon}</div>
                    <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === "rooms" && (
        <>
          {/* Booking Section */}
          <section className="py-12 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8 border border-border"
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">Book Your Stay</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Check-in Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Check Availability
                    </Button>
                  </div>
                  <div className="flex items-end">
                    <Button variant="outline" className="w-full bg-transparent">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Rooms Section */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                {rooms.map((room, idx) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-border group">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={room.image || "/placeholder.svg"}
                          alt={room.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-foreground">{room.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{room.rating}</span>
                          </div>
                        </div>
                        <p className="text-2xl font-bold text-primary mb-4">${room.price}/night</p>
                        <ul className="space-y-2 mb-6">
                          {room.features.map((feature) => (
                            <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Book Now
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === "amenities" && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Amenities & Services</h2>
              <p className="text-lg text-muted-foreground">Everything you need for a comfortable stay</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {amenities.map((amenity, idx) => (
                <motion.div
                  key={amenity.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg bg-primary/5 border border-border hover:border-primary/50 transition"
                >
                  <div className="text-4xl mb-3">{amenity.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{amenity.name}</h3>
                  <p className="text-muted-foreground text-sm">{amenity.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "contact" && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+212 5 35 63 44 77</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">info@darelfassi.ma</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">Medina, Fez, Morocco</p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}
