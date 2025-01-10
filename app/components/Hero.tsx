'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Upload } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Glowing wings effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl">
        <motion.div
          className="absolute left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm"
          >
            <span className="text-sm text-purple-200">Profile Picture</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create Perfect Profile Pictures
          </motion.h1>
          
          <motion.p 
            className="text-purple-200/80 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your photos into professional profile pictures instantly.
            Advanced AI technology ensures perfect results every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10"
          >
            <Link href="/upload">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-3xl p-1 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
            <div className="w-full h-full rounded-xl bg-gray-900/50 relative group">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Profile Picture Preview"
                  fill
                  className="object-cover rounded-xl"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Upload className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                  </div>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>

          {/* Floating elements */}
          <motion.div 
            className="absolute -right-10 top-1/4"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut"
            }}
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-lg rounded-lg p-4 shadow-2xl">
              <Image
                src="/placeholder.svg"
                width={100}
                height={100}
                alt="Sample 1"
                className="rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg"
                animate={{ opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -left-16 bottom-1/4"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-lg p-4 shadow-2xl">
              <Image
                src="/placeholder.svg"
                width={120}
                height={120}
                alt="Sample 2"
                className="rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                animate={{ opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

