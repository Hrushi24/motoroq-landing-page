import { Shield, Zap, Truck, Award } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'All products meet international safety standards and certifications'
    },
    {
      icon: Zap,
      title: 'Fast Shipping',
      description: 'Get your gear within 2-5 business days, guaranteed delivery'
    },
    {
      icon: Truck,
      title: 'Easy Returns',
      description: '30-day money-back guarantee on all purchases'
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: '24/7 customer service to help you choose the right gear'
    }
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">motoroq</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering the best bike accessories with unmatched quality and service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div 
                key={idx}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary hover:bg-card/50 transition"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
