'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check for dark mode preference
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? 'shadow-md border-b border-[#e5e7eb]' // subtle border when scrolled
          : ''
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row h-auto md:h-16 items-center justify-between py-4 md:py-0">
          {/* Logo and Tagline */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6 w-full md:w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="text-2xl font-bold" style={{ color: '#bfa14a' }}>
                Ella
              </Link>
            </motion.div>
            <span className="block text-sm md:text-base mt-2 md:mt-0 md:ml-4 font-medium" style={{ color: '#bfa14a' }}>
              Growth & Revenue Consultant | Growth & Market Expansion
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors duration-200 relative group"
                style={{ color: '#6b5b2e' }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#bfa14a' }} />
              </Link>
            ))}
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-[#f6ecd9] transition-colors"
              aria-label="Toggle dark mode"
              style={{ color: '#bfa14a' }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4 mt-4 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-[#f6ecd9] transition-colors"
              aria-label="Toggle dark mode"
              style={{ color: '#bfa14a' }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-[#f6ecd9] transition-colors"
              aria-label="Toggle menu"
              style={{ color: '#bfa14a' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export function Hero() {
  return (
    <header
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url(/img/hero-bg.jpg)' }}
    >
      {/* Golden/white overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(120deg, rgba(255,255,255,0.85) 60%, rgba(191,161,74,0.15) 100%)'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
        {/* Headshot Image */}
        <img
          src="/img/headshot.jpg"
          alt="Eleonora Berylo headshot"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#bfa14a] shadow-lg"
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
          style={{ color: '#bfa14a' }}
        >
          Hi, I&apos;m Ella, a Founder of ELAR Group.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg sm:text-xl mb-8"
          style={{ color: '#6b5b2e' }}
        >
          I help businesses grow and expand into new markets through innovative digital strategies.
        </motion.p>
        <div className="flex space-x-4">
          <Link
            href="#contact"
            className="px-4 py-2 text-white bg-[#bfa14a] rounded-md shadow-md hover:bg-[#a78b3a] transition-colors"
          >
            Contact Me
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 text-[#bfa14a] bg-white rounded-md shadow-md hover:bg-[#f6ecd9] transition-colors"
          >
            Read My Blog
          </Link>
        </div>
      </div>
    </header>
  )
}
