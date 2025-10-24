"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Users, Award, TrendingUp, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LearnHubPlatformPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      category: "web",
      instructor: "Ahmed Hassan",
      students: 1250,
      rating: 4.8,
      price: 49.99,
      image: "/learnhub-web-development-course.jpg",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      category: "web",
      instructor: "Fatima Bennani",
      students: 890,
      rating: 4.9,
      price: 79.99,
      image: "/learnhub-react-advanced-course.jpg",
      level: "Advanced",
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      category: "marketing",
      instructor: "Mohammed Alaoui",
      students: 2100,
      rating: 4.7,
      price: 59.99,
      image: "/learnhub-digital-marketing-course.jpg",
      level: "Intermediate",
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      category: "design",
      instructor: "Leila Mansouri",
      students: 1560,
      rating: 4.8,
      price: 69.99,
      image: "/learnhub-ui-ux-design-course.jpg",
      level: "Beginner",
    },
    {
      id: 5,
      title: "Data Science with Python",
      category: "data",
      instructor: "Karim Boutaleb",
      students: 1340,
      rating: 4.9,
      price: 89.99,
      image: "/learnhub-data-science-course.jpg",
      level: "Intermediate",
    },
    {
      id: 6,
      title: "Business Strategy & Growth",
      category: "business",
      instructor: "Nadia Chakir",
      students: 980,
      rating: 4.6,
      price: 74.99,
      image: "/learnhub-business-strategy-course.jpg",
      level: "Advanced",
    },
  ]

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "web", name: "Web Development" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "data", name: "Data Science" },
    { id: "business", name: "Business" },
  ]

  const stats = [
    { label: "Active Students", value: "50,000+", icon: Users },
    { label: "Courses Available", value: "200+", icon: BookOpen },
    { label: "Expert Instructors", value: "150+", icon: Award },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">LearnHub Maroc</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-b from-blue-600 to-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src="/learnhub-hero-learning.jpg" alt="LearnHub" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold">LearnHub Maroc</h2>
            <p className="text-xl">Learn Skills, Build Your Future</p>
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

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
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
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-border group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {course.level}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({course.students} students)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-primary">${course.price}</p>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Enroll</Button>
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
            <h2 className="text-4xl font-bold text-foreground">Start Learning Today</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of students learning new skills and advancing their careers
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse All Courses
              </Button>
              <Button variant="outline">Get Premium Access</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
