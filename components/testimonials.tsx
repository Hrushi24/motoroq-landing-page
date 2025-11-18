import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'James Mitchell',
      role: 'Professional Rider',
      content: 'The quality of these products is unmatched. My gear has never felt better!',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Motorcycle Enthusiast',
      content: 'Shipping was incredibly fast and the customer service is top-notch.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Commuter',
      content: 'Great prices and authentic products. Will definitely buy again!',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="text-primary">Riders</span> Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about motoroq
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-lg mb-6 text-foreground">"{testimonial.content}"</p>
              
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
