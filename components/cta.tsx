import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-2xl bg-gradient-to-br from-primary to-accent p-12 md:p-16 text-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Upgrade Your Ride?
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of riders who trust motoroq for premium bike accessories and gear
          </p>

          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground hover:bg-primary-foreground/90 text-primary rounded-lg font-bold transition">
            Explore All Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </section>
  )
}
