'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { GradientButton } from './Button/Gradient'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  // Animation variants for menu items
  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  }

  // Animation variants for hamburger menu icon
  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      rotate: 180,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <header className="fixed left-0 right-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={75} height={75} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/ui-ux" className="text-black hover:text-blue-500 transition">
            UI/UX
          </Link>
          <Link href="/visual-design" className="text-black hover:text-blue-500 transition">
            Visual Design
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <GradientButton linkProps={{ href: 'https://www.linkedin.com/in/dashmills0609/', target: '_blank', rel: 'noopener noreferrer' }}>
            Get Started
          </GradientButton>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMobileMenu}
            className="focus:outline-none p-2"
            variants={hamburgerVariants}
            animate={mobileMenuOpen ? 'open' : 'closed'}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-black" />
                </motion.div>
              ) : (
                <motion.div
                  key="hamburger"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="md:hidden bg-white shadow-lg overflow-hidden" variants={menuVariants} initial="closed" animate="open" exit="closed">
            <div className="px-4 pt-2 pb-4 space-y-4">
              <motion.div variants={itemVariants} initial="closed" animate="open" custom={0} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/ui-ux"
                  className="block text-black hover:text-blue-500 transition py-2 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  UI/UX
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} initial="closed" animate="open" custom={1} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/visual-design"
                  className="block text-black hover:text-blue-500 transition py-2 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Visual Design
                </Link>
              </motion.div>

              <motion.div
                className="pt-2"
                variants={itemVariants}
                initial="closed"
                animate="open"
                custom={2}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GradientButton linkProps={{ href: 'https://www.linkedin.com/in/dashmills0609/', target: '_blank', rel: 'noopener noreferrer' }}>
                  Get Started
                </GradientButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
