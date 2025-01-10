import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-white font-medium text-xl">PixelPerfect</span>
            </div>
            <p className="text-gray-400">
              Create perfect profile photos with our AI-powered editor. Professional results in seconds.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Examples</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Press</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PixelPerfect. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

