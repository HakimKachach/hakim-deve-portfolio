"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Footer content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-2">Hakim Deve</h3>
              <p className="text-primary-foreground/80 text-sm">
                Full Stack Developer from Morocco, crafting digital experiences that matter.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["Home", "About", "Projects", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-primary-foreground/80 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {["Web Development", "E-commerce", "WordPress", "UI/UX Design"].map((service) => (
                  <li key={service} className="hover:text-primary-foreground/80 transition-colors">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20" />

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/80">
            <p>
              © {currentYear} Hakim Deve | Made with <span className="text-red-400">❤</span> from Morocco
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
