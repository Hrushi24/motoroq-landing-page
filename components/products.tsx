import { Star, ShoppingCart } from 'lucide-react'

export function Products() {
  const products = [
    {
      name: 'Pro Racing Helmet',
      category: 'Helmets',
      price: '$199',
      rating: 4.9,
      image: '/racing-motorcycle-helmet-premium.jpg',
      badge: 'Best Seller'
    },
    {
      name: 'Kevlar Gloves',
      category: 'Gloves',
      price: '$89',
      rating: 4.8,
      image: '/motorcycle-protective-gloves-kevlar.jpg',
      badge: 'New'
    },
    {
      name: 'Protective Jacket',
      category: 'Jackets',
      price: '$299',
      rating: 4.9,
      image: '/motorcycle-protective-riding-jacket.jpg',
      badge: 'Featured'
    },
    {
      name: 'Sport Riding Boots',
      category: 'Footwear',
      price: '$149',
      rating: 4.7,
      image: '/motorcycle-racing-boots.jpg',
      badge: 'Popular'
    }
  ]

  return (
    <section id="products" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked gear trusted by riders worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary transition">
              <div className="relative h-64 overflow-hidden bg-background">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-accent">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-accent text-accent" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
