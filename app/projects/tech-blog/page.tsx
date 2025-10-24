"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TechBlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const posts = [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      excerpt: "Exploring emerging technologies and trends that will shape web development",
      category: "web-dev",
      author: "Ahmed Hassan",
      date: "2025-10-15",
      image: "/tech-blog-web-development-future.jpg",
      readTime: 8,
    },
    {
      id: 2,
      title: "React Server Components Explained",
      excerpt: "A comprehensive guide to understanding React Server Components",
      category: "react",
      author: "Fatima Bennani",
      date: "2025-10-10",
      image: "/tech-blog-react-server-components.jpg",
      readTime: 12,
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for creating high-performance backend systems",
      category: "backend",
      author: "Mohammed Alaoui",
      date: "2025-10-05",
      image: "/tech-blog-nodejs-apis.jpg",
      readTime: 10,
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to Use Each",
      excerpt: "Understanding the differences and use cases for modern CSS layouts",
      category: "css",
      author: "Leila Mansouri",
      date: "2025-09-28",
      image: "/tech-blog-css-layouts.jpg",
      readTime: 6,
    },
    {
      id: 5,
      title: "TypeScript Best Practices",
      excerpt: "Tips and tricks for writing better TypeScript code",
      category: "typescript",
      author: "Karim Boutaleb",
      date: "2025-09-20",
      image: "/tech-blog-typescript-best-practices.jpg",
      readTime: 9,
    },
    {
      id: 6,
      title: "Database Optimization Techniques",
      excerpt: "Strategies for improving database performance and efficiency",
      category: "database",
      author: "Nadia Chakir",
      date: "2025-09-15",
      image: "/tech-blog-database-optimization.jpg",
      readTime: 11,
    },
  ]

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "web-dev", name: "Web Development" },
    { id: "react", name: "React" },
    { id: "backend", name: "Backend" },
    { id: "css", name: "CSS" },
    { id: "typescript", name: "TypeScript" },
    { id: "database", name: "Database" },
  ]

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h1 className="text-2xl font-bold text-foreground">TechMaroc</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src="/tech-blog-hero-coding.jpg" alt="TechMaroc" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold">TechMaroc Blog</h2>
            <p className="text-xl">Latest insights on technology and web development</p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
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

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-border group cursor-pointer">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {categories.find((c) => c.id === post.category)?.name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span>{post.readTime} min read</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{post.title}</h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <Button variant="ghost" className="text-primary hover:text-primary/80">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
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
            <p className="text-muted-foreground">Get the latest tech articles delivered to your inbox</p>
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
