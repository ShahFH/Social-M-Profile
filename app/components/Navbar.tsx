'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-white font-medium text-xl">PixelPhoto</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Showcase', 'Pricing'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md absolute top-16 left-0 right-0 p-4">
            <div className="flex flex-col gap-4">
              {['Features', 'Showcase', 'Pricing'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <hr className="border-gray-700" />
              <Button variant="ghost" className="text-gray-300 justify-start px-0">
                Log in
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

