import { ArrowRight, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-card px-3 py-1 rounded-full border border-border">
              <Zap size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">Now available in 50+ countries</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              <span className="text-foreground">Premium Bike</span>
              <span className="text-primary"> Accessories</span>
              <span className="text-foreground"> for Every Rider</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Experience the ultimate in bike safety and performance. From helmets to protective gear, we've got everything to elevate your ride.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition">
                Shop Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 border border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition">
                Watch Demo
              </button>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-accent">10M+</p>
                <p className="text-sm text-muted-foreground">Products Shipped</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Riders</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">4.9★</p>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl">
              <img 
                src="/premium-motorcycle-gear-and-accessories-helmet-glo.jpg" 
                alt="Premium Bike Accessories" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
