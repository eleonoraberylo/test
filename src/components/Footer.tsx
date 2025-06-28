'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: 'https://github.com/eleonoraberylo', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/eleonora-berylo/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:eleonoraberylo@gmail.com', icon: Mail, label: 'Email' },
  ]

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-white border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link href="/" className="text-2xl font-bold" style={{ color: '#bfa14a' }}>
              Ella
            </Link>
            <span className="block text-sm md:text-base font-medium" style={{ color: '#bfa14a' }}>
              App Growth Strategist | In-App Monetization & Subscription Revenue Expert
            </span>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg transition-colors"
                  style={{ background: '#f6ecd9', color: '#6b5b2e' }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold" style={{ color: '#bfa14a' }}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition-colors duration-200 relative group"
                    style={{ color: '#6b5b2e' }}
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#bfa14a' }} />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold" style={{ color: '#bfa14a' }}>Get in Touch</h3>
            <div className="space-y-2" style={{ color: '#6b5b2e' }}>
              <p>
                <a href="mailto:hello@ella.dev" className="hover:underline" style={{ color: '#6b5b2e' }}>
                  hello@ella.dev
                </a>
              </p>
              <p>Seattle, WA</p>
              <p>Available for freelance work</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-[#e5e7eb] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm" style={{ color: '#6b5b2e' }}>
            <span>© {currentYear} Ella. Built with</span>
            <Heart size={16} style={{ color: '#bfa14a' }} />
            <span>using Next.js & Tailwind CSS</span>
          </div>
          <div className="flex items-center space-x-6 text-sm" style={{ color: '#6b5b2e' }}>
            <Link href="/privacy" className="transition-colors hover:underline" style={{ color: '#6b5b2e' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:underline" style={{ color: '#6b5b2e' }}>
              Terms of Service
            </Link>
            <a
              href="https://github.com/ella/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:underline"
              style={{ color: '#6b5b2e' }}
            >
              Source Code
            </a>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-40"
          style={{ background: '#bfa14a', color: '#fff' }}
          aria-label="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}