'use client'

import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl" />
        <motion.div 
          className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] gap-px opacity-10">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="bg-white/20" />
            ))}
          </div>

          <div className="relative text-center">
            <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Ready to Transform Your Profile?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have already enhanced their online presence
              with our AI-powered photo editor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8"
              >
                Get Started for Free
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-gray-300 border-gray-700 hover:bg-gray-800"
              >
                View Examples
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

