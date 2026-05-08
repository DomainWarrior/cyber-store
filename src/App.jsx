import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import ProductModal from './components/ProductModal'
import Footer from './components/Footer'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#050505] text-[#e0e0e0] overflow-x-hidden">
        <Navbar onCartOpen={() => setCartOpen(true)} />
        <Hero />
        <StatsBar />
        <ProductGrid onSelect={setSelected} />
        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </div>
    </CartProvider>
  )
}
