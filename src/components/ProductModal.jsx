import { useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function ProductModal({ product, onClose }) {
  const { items, dispatch } = useCart()
  const inCart = items.some(i => i.id === product.id)
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div className="h-px w-full shimmer" />

        {/* Header */}
        <div className="p-6 pb-0 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-5xl w-16 h-16 flex items-center justify-center bg-[#111] border border-[#222] rounded-xl">
              {product.icon}
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-[#444] uppercase mb-1">{product.category}</div>
              <h2 className="text-xl font-black text-white">{product.name}</h2>
              <p className="font-mono text-xs text-cyber-green mt-0.5">{product.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#444] hover:text-white transition-colors font-mono text-lg flex-shrink-0 w-8 h-8 flex items-center justify-center border border-[#222] rounded hover:border-[#333]"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Rating row */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-cyber-green">{product.rating}★</span>
            <span className="font-mono text-xs text-[#555]">({product.reviews.toLocaleString()} reviews)</span>
            <span className="font-mono text-[10px] border border-[#222] rounded px-2 py-0.5 text-[#444]">{product.difficulty}</span>
            <span className="font-mono text-[10px] border border-[#222] rounded px-2 py-0.5 text-[#444]">👥 {product.students}</span>
            <span className="font-mono text-[10px] border border-[#222] rounded px-2 py-0.5 text-[#444]">⏱ {product.duration}</span>
          </div>

          {/* Description */}
          <p className="text-[#888] text-sm leading-relaxed">{product.description}</p>

          {/* Features */}
          <div>
            <div className="font-mono text-xs text-cyber-green tracking-widest uppercase mb-3">
              {'>'} What's included
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map(f => (
                <li key={f} className="flex items-start gap-2 font-mono text-xs text-[#888]">
                  <span className="text-cyber-green mt-0.5 flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal info box */}
          <div className="bg-[#080808] border border-[#1a1a1a] rounded-lg p-4 font-mono text-xs text-[#555] space-y-1">
            <div><span className="text-cyber-green">$</span> echo "Instant delivery after purchase"</div>
            <div><span className="text-cyber-green">$</span> echo "Lifetime access — no subscription"</div>
            <div><span className="text-cyber-green">$</span> echo "30-day money-back guarantee"</div>
          </div>

          {/* Price + CTA */}
          <div className="border-t border-[#1a1a1a] pt-6 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl font-bold text-cyber-green">${product.price}</span>
                <span className="font-mono text-base text-[#444] line-through">${product.originalPrice}</span>
              </div>
              <span className="font-mono text-xs text-cyber-red">You save ${product.originalPrice - product.price} ({discount}% off)</span>
            </div>
            <button
              onClick={() => { dispatch({ type: 'ADD', item: product }); onClose() }}
              disabled={inCart}
              className={`font-mono text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded transition-all duration-200 ${
                inCart
                  ? 'bg-cyber-green/20 text-cyber-green/60 cursor-default border border-cyber-green/20'
                  : 'bg-cyber-green text-black hover:bg-cyber-green/90 animate-pulse-green'
              }`}
            >
              {inCart ? '✓ In Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
