import { useCart } from '../context/CartContext'

const badgeStyle = {
  green: 'bg-cyber-green/10 text-cyber-green border-cyber-green/30',
  red:   'bg-cyber-red/10  text-cyber-red  border-cyber-red/30',
  cyan:  'bg-cyber-cyan/10 text-cyber-cyan  border-cyber-cyan/30',
}

const stars = (rating) => {
  const full = Math.floor(rating)
  return '★'.repeat(full) + (rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(rating))
}

export default function ProductCard({ product, onSelect }) {
  const { items, dispatch } = useCart()
  const inCart = items.some(i => i.id === product.id)

  const handleAdd = (e) => {
    e.stopPropagation()
    dispatch({ type: 'ADD', item: product })
  }

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <div
      onClick={() => onSelect(product)}
      className="product-card cursor-pointer bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border-t border-l border-cyber-green/20 rounded-tl-xl" />
      </div>
      <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-full border-b border-r border-cyber-green/10 rounded-br-xl" />
      </div>

      {/* Badge + category */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest uppercase text-[#444] border border-[#222] rounded px-2 py-0.5">
          {product.category}
        </span>
        {product.badge && (
          <span className={`font-mono text-[10px] tracking-widest uppercase border rounded px-2 py-0.5 ${badgeStyle[product.badgeColor]}`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Icon */}
      <div className="flex items-center gap-4">
        <div className="text-4xl w-14 h-14 flex items-center justify-center bg-[#111] border border-[#1a1a1a] rounded-lg flex-shrink-0">
          {product.icon}
        </div>
        <div>
          <h3 className="font-bold text-white text-base leading-tight mb-0.5">{product.name}</h3>
          <p className="font-mono text-[11px] text-[#555] leading-snug">{product.tagline}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-cyber-green text-sm tracking-tight">{stars(product.rating)}</span>
        <span className="font-mono text-xs text-[#555]">
          {product.rating} ({product.reviews.toLocaleString()})
        </span>
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-mono text-[10px] text-[#444] border border-[#1a1a1a] rounded px-2 py-0.5">
          {product.difficulty}
        </span>
        <span className="font-mono text-[10px] text-[#444] border border-[#1a1a1a] rounded px-2 py-0.5">
          👥 {product.students}
        </span>
        <span className="font-mono text-[10px] text-[#444] border border-[#1a1a1a] rounded px-2 py-0.5">
          ⏱ {product.duration}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1a1a1a]" />

      {/* Price + CTA */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-2xl font-bold text-cyber-green">${product.price}</span>
            <span className="font-mono text-sm text-[#444] line-through">${product.originalPrice}</span>
          </div>
          <span className="font-mono text-[10px] text-cyber-red">SAVE {discount}%</span>
        </div>
        <button
          onClick={handleAdd}
          disabled={inCart}
          className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded border transition-all duration-200 ${
            inCart
              ? 'border-cyber-green/30 text-cyber-green/50 cursor-default'
              : 'border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black'
          }`}
        >
          {inCart ? '✓ Added' : '+ Cart'}
        </button>
      </div>
    </div>
  )
}
