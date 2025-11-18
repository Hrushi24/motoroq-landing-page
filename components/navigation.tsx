'use client'

import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollToSignup = () => {
    document.querySelector('input[type="email"]')?.focus()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">⚡</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">motoroq</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={scrollToSignup} className="text-muted-foreground hover:text-foreground transition">
            Notify Me
          </button>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition">Features</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={scrollToSignup}
            className="hidden sm:block px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition"
          >
            Get Notified
          </button>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}
