'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'How does the AI photo enhancement work?',
    answer: 'Our AI technology analyzes your photo and automatically adjusts lighting, contrast, and facial features while maintaining a natural look. It\'s trained on millions of professional headshots to ensure the best results.'
  },
  {
    question: 'Can I use the enhanced photos for commercial purposes?',
    answer: 'Yes! Once you enhance a photo, you have full rights to use it for both personal and commercial purposes. This includes LinkedIn, company websites, and marketing materials.'
  },
  {
    question: 'How long does it take to process a photo?',
    answer: 'Most photos are processed within seconds. However, processing time may vary depending on the complexity of the enhancement and current server load. You\'ll never wait more than a minute.'
  },
  {
    question: 'What file formats are supported?',
    answer: 'We support all major image formats including JPG, PNG, WEBP, and HEIC. You can export your enhanced photos in any of these formats as well.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption to protect your photos, and they\'re automatically deleted from our servers after processing. We never share your data with third parties.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-lg">
            Everything you need to know about our photo enhancement service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white/60 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-white/60">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

