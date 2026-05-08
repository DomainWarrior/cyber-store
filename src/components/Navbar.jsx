import { useCart } from '../context/CartContext'

export default function Navbar({ onCartOpen }) {
  const { count } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-cyber-green font-mono text-xl font-bold tracking-tight">
            {'>'} <span className="neon-green">CYBER</span>
            <span className="text-white">STORE</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Shop', 'Courses', 'Tools', 'Scripts'].map(link => (
            <a
              key={link}
              href="#products"
              className="font-mono text-sm text-[#888] hover:text-cyber-green transition-colors duration-200 tracking-wide"
            >
              {link.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 font-mono text-xs text-[#555] border border-[#1a1a1a] rounded px-3 py-1.5">
            <span className="text-cyber-green">$</span>
            <span>search</span>
            <span className="animate-blink text-cyber-green">_</span>
          </div>

          <button
            onClick={onCartOpen}
            className="relative p-2 rounded border border-[#1a1a1a] hover:border-cyber-green/40 transition-colors duration-200 group"
          >
            <svg className="w-5 h-5 text-[#888] group-hover:text-cyber-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-cyber-green text-black text-[10px] font-bold font-mono w-4 h-4 rounded-full flex items-center justify-center animate-pulse-green">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
