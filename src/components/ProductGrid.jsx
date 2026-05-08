import { useState } from 'react'
import { products, categories } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductGrid({ onSelect }) {
  const [active, setActive] = useState('all')
  const [sort, setSort] = useState('popular')

  const filtered = products
    .filter(p => active === 'all' || p.category === active)
    .sort((a, b) => {
      if (sort === 'price-low')  return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating')     return b.rating - a.rating
      return b.reviews - a.reviews
    })

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-cyber-green/40 to-transparent max-w-[60px]" />
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase">Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
          Choose Your <span className="text-cyber-green neon-green">Weapons</span>
        </h2>
        <p className="text-[#555] font-mono text-sm mt-2">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''} available
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded border transition-all duration-200 ${
                active === cat
                  ? 'bg-cyber-green text-black border-cyber-green'
                  : 'border-[#1a1a1a] text-[#555] hover:border-cyber-green/40 hover:text-cyber-green'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="font-mono text-xs bg-[#0d0d0d] border border-[#1a1a1a] text-[#888] rounded px-3 py-2 outline-none focus:border-cyber-green/40 cursor-pointer"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((product, i) => (
          <div
            key={product.id}
            style={{ animationDelay: `${i * 60}ms` }}
            className="animate-fadeInUp"
          >
            <ProductCard product={product} onSelect={onSelect} />
          </div>
        ))}
      </div>

      {/* Bundle banner */}
      <div className="mt-16 relative rounded-xl border border-cyber-green/20 bg-[#0d0d0d] overflow-hidden p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-green/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-green via-cyber-green/50 to-transparent" />
        <div className="relative">
          <div className="font-mono text-xs text-cyber-green tracking-widest uppercase mb-2">Limited Time Offer</div>
          <h3 className="text-2xl font-black text-white mb-1">
            Save <span className="text-cyber-green neon-green">$564</span> with the Complete Bundle
          </h3>
          <p className="text-[#555] font-mono text-sm">Every product. Every future release. One lifetime payment.</p>
        </div>
        <div className="relative flex flex-col items-center sm:items-end gap-2 flex-shrink-0">
          <div className="font-mono text-4xl font-bold text-cyber-green">$499</div>
          <div className="font-mono text-sm text-[#444] line-through">$1,063 value</div>
          <button
            onClick={() => onSelect(products.find(p => p.slug === 'complete-bundle'))}
            className="bg-cyber-green text-black font-bold font-mono text-xs tracking-widest uppercase px-6 py-3 rounded hover:bg-cyber-green/90 transition-colors animate-pulse-green"
          >
            Get the Bundle →
          </button>
        </div>
      </div>
    </section>
  )
}
