'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic',
    price: '$9',
    period: 'month',
    description: 'Perfect for individuals',
    features: [
      '50 AI-enhanced photos per month',
      'Basic editing tools',
      'Standard export formats',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'month',
    description: 'Best for professionals',
    features: [
      'Unlimited AI-enhanced photos',
      'Advanced editing tools',
      'All export formats',
      'Priority support',
      'Remove background',
      'Custom presets'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'month',
    description: 'For teams and businesses',
    features: [
      'Everything in Pro',
      'API access',
      'Custom AI model training',
      'Dedicated account manager',
      'Team collaboration',
      'Analytics dashboard'
    ]
  }
]

export default function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

