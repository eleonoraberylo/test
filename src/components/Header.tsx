'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        isScrolled ? 'shadow-md border-b border-[#e5e7eb]' : ''
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-extrabold tracking-tight" style={{ color: '#bfa14a' }}>
              ELAR GROUP
            </Link>
            <span className="hidden sm:block text-sm font-medium tracking-wide" style={{ color: '#bfa14a' }}>
              Growth Strategy & Demand Generation
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-2 py-1 font-medium transition-colors duration-200 hover:text-[#bfa14a] text-[#6b5b2e]"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#bfa14a] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
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
