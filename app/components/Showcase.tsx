'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const showcaseImages = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
]

export default function Showcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="showcase">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Stunning Transformations
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See the incredible before and after results of our AI-powered profile picture enhancement.
          </p>
        </motion.div>

        <div className="relative">
          {/* Curved Path SVG */}
          <svg
            viewBox="0 0 1200 300"
            className="w-full h-auto max-w-5xl mx-auto"
            style={{ filter: 'drop-shadow(0px 4px 20px rgba(147, 51, 234, 0.1))' }}
          >
            <path
              d="M 100 200 C 400 100, 800 100, 1100 200"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="60"
              className="opacity-20"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#818CF8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-5xl">
              {showcaseImages.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{
                    left: `${10 + (index * 12)}%`,
                    top: index % 2 === 0 ? '20%' : '60%',
                  }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg"
                        alt={`Showcase ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Featured Testimonial Card */}
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-80"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-purple-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg"
                        alt="Featured testimonial"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Sarah Johnson</h4>
                      <p className="text-gray-400 text-sm">Marketing Director</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    "The AI enhancement is incredible! It transformed my LinkedIn profile completely."
                  </p>
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-5 h-5 text-purple-500 fill-current"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + (i * 0.1) }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

