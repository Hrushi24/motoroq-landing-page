'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <main className="bg-background text-foreground overflow-hidden min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="mb-8 inline-block">
            <div className="bg-primary/10 border border-primary/30 px-4 py-2 rounded-full">
              <p className="text-primary font-semibold text-sm tracking-wide">COMING SOON</p>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              MOTOROQ
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl">Premium Bike Gear & Accessories</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            We're building the ultimate destination for high-quality motorcycle accessories and gear. Get ready for an experience designed for riders, by riders.
          </p>

          {/* Email Signup */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mb-12 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 md:py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="animate-in fade-in slide-in-from-bottom-2 mb-8">
              <p className="text-accent font-medium">Thanks! We'll notify you when we launch.</p>
            </div>
          )}

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Curated selection of top-tier bike accessories</p>
            </div>
            <div className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">Quick delivery to get you riding sooner</p>
            </div>
            <div className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-3">💯</div>
              <h3 className="font-bold text-lg mb-2">Best Prices</h3>
              <p className="text-sm text-muted-foreground">Competitive pricing on all gear and accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Element */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <Footer />
    </main>
  )
}
