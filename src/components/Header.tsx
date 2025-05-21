'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GradientButton } from './Button/Gradient'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
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
          <Link href="/about" className="text-black hover:text-blue-500 transition">
            About
          </Link>
          <Link href="/portfolio" className="text-black hover:text-blue-500 transition">
            Portfolio
          </Link>
          <Link href="/contact" className="text-black hover:text-blue-500 transition">
            Contact Us
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
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link href="/about" className="block text-black hover:text-blue-500 transition py-2">
              About
            </Link>
            <Link href="/portfolio" className="block text-black hover:text-blue-500 transition py-2">
              Portfolio
            </Link>
            <Link href="/contact" className="block text-black hover:text-blue-500 transition py-2">
              Contact Us
            </Link>
            <div className="pt-2">
              <GradientButton linkProps={{ href: 'https://www.linkedin.com/in/dashmills0609/', target: '_blank', rel: 'noopener noreferrer' }}>
                Get Started
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
