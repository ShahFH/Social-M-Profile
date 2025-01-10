'use client'

import { Camera, Wand2, Zap, Shield, Palette, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Camera,
    title: 'Smart Capture',
    description: 'Advanced face detection ensures perfect framing every time.'
  },
  {
    icon: Wand2,
    title: 'AI Enhancement',
    description: 'Automatic retouching and enhancement powered by cutting-edge AI.'
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get your enhanced photos in seconds, not minutes.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your photos are processed securely and never stored.'
  },
  {
    icon: Palette,
    title: 'Style Variety',
    description: 'Choose from a wide range of professional styles and filters.'
  },
  {
    icon: Users,
    title: 'Perfect for Teams',
    description: 'Create consistent, professional profile pictures for your entire organization.'
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Powerful Features for Perfect Photos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to create professional profile pictures that make a lasting impression.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

