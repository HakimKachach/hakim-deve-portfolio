"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          {/* Contact content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a question about my services, want to discuss a project, or just want to say hello,
                  feel free to reach out. I'm always excited to hear about new opportunities.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-4">
                <Card className="p-6 border border-border hover:border-primary/50 transition-colors flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <a href="mailto:hello@hakimdev.ma" className="text-primary hover:underline">
                      hello@hakimdev.ma
                    </a>
                  </div>
                </Card>

                <Card className="p-6 border border-border hover:border-primary/50 transition-colors flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">WhatsApp</h4>
                    <a href="https://wa.me/212612345678" className="text-primary hover:underline">
                      +212 6 12 34 56 78
                    </a>
                  </div>
                </Card>
              </div>

              {/* Social links */}
              <div>
                <h4 className="font-bold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com" },
                    { name: "GitHub", url: "https://github.com" },
                    { name: "Twitter", url: "https://twitter.com" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.name}
                    >
                      <span className="text-sm font-bold">{social.name.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
