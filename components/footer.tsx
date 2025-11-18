import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">⚡</span>
              </div>
              <span className="text-xl font-bold text-primary">motoroq</span>
            </div>
            <p className="text-muted-foreground">Premium bike accessories & gear launching soon. Be among the first to know.</p>
          </div>

          {/* Coming Soon Info */}
          <div>
            <h3 className="font-semibold mb-4">Coming Soon</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Complete product catalog</li>
              <li className="text-muted-foreground">Fast shipping worldwide</li>
              <li className="text-muted-foreground">Exclusive launch offers</li>
              <li className="text-muted-foreground">24/7 customer support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">Subscribe above to get notified when we launch.</p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span><br />
                hello@motoroq.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">© 2025 motoroq. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
