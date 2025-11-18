export function Stats() {
  const stats = [
    { value: '50+', label: 'Countries Worldwide', subtext: 'Serving' },
    { value: '100K+', label: 'Products Curated', subtext: 'Selection of' },
    { value: '99%', label: 'Satisfaction Rate', subtext: 'Customer' },
    { value: '24/7', label: 'Customer Support', subtext: 'Available' }
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.subtext}</p>
              <p className="font-semibold text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
