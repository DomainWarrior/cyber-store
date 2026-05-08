import { useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, total, dispatch } = useCart()

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-[#0a0a0a] border-l border-[#1a1a1a] flex flex-col transition-transform duration-350 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top accent */}
        <div className="h-px w-full shimmer flex-shrink-0" />

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#1a1a1a] flex-shrink-0">
          <div>
            <h2 className="font-mono font-bold text-white tracking-widest uppercase text-sm">
              {'>'} Cart
            </h2>
            <p className="font-mono text-xs text-[#555] mt-0.5">
              {items.length} item{items.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-[#444] hover:text-white w-8 h-8 flex items-center justify-center border border-[#222] rounded hover:border-[#333] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <div className="text-5xl">🛒</div>
              <div className="font-mono text-[#444] text-sm">Cart is empty.</div>
              <div className="font-mono text-[#333] text-xs">
                $ add --item {"<product>"} to continue
              </div>
              <button
                onClick={onClose}
                className="font-mono text-xs text-cyber-green border border-cyber-green/30 rounded px-4 py-2 hover:bg-cyber-green/10 transition-colors mt-2"
              >
                Browse Arsenal →
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-4 flex items-center gap-4">
                <div className="text-2xl w-10 h-10 flex items-center justify-center bg-[#111] border border-[#222] rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white text-sm truncate">{item.name}</div>
                  <div className="font-mono text-xs text-[#555] mt-0.5">{item.category}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="font-mono text-sm font-bold text-cyber-green">${item.price}</span>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
                    className="font-mono text-[10px] text-[#444] hover:text-cyber-red transition-colors tracking-widest"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#1a1a1a] p-6 space-y-4 flex-shrink-0">
            {/* Terminal promo */}
            <div className="bg-[#080808] border border-[#1a1a1a] rounded p-3 font-mono text-xs">
              <span className="text-cyber-green">$</span>{' '}
              <span className="text-[#555]">apply --code </span>
              <span className="text-white">HACKER20</span>
              <span className="text-[#555]"> → </span>
              <span className="text-cyber-green">20% off ✓</span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-[#555]">Subtotal</span>
              <span className="font-mono text-lg font-bold text-white">${total.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-cyber-green">Discount (HACKER20)</span>
              <span className="font-mono text-sm text-cyber-green">-${Math.round(total * 0.2)}</span>
            </div>
            <div className="border-t border-[#1a1a1a] pt-3 flex items-center justify-between">
              <span className="font-mono text-sm text-white font-bold">Total</span>
              <span className="font-mono text-2xl font-bold text-cyber-green neon-green">
                ${Math.round(total * 0.8).toLocaleString()}
              </span>
            </div>

            <button className="w-full bg-cyber-green text-black font-bold font-mono text-sm tracking-widest uppercase py-4 rounded hover:bg-cyber-green/90 transition-colors animate-pulse-green">
              Checkout →
            </button>
            <button
              onClick={() => dispatch({ type: 'CLEAR' })}
              className="w-full font-mono text-xs text-[#333] hover:text-[#555] transition-colors tracking-widest"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
