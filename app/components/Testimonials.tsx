import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    content: 'PicturePro transformed my LinkedIn profile. The Profile outline is incredible!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1660680299120-c7c132df1b1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'Quick, easy, and the results are amazing. Perfect for my GitHub and social profiles.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Emma Davis',
    role: 'Freelance Designer',
    content: 'The attention to detail is remarkable. It\'s like having a personal photographer!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Loved by Professionals
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their profile pictures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">{testimonial.content}</p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

