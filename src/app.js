import React from 'react'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './layout/header/header'
import Sidebar from './layout/sidebar/sidebar'
import About from './pages/about/about'
import Home from './pages/home/home'
import Footer from './layout/footer/footer'
import CartPage from './pages/cartPage/cartPage'
import { CartProvider } from './context/context'

const App = () => {
  const [cartCount] = useState(3)
  const location = useLocation()
  const pathname = location.pathname

  return (
    <CartProvider>
      <div className="App">
        <Header cartCount={cartCount} />

        <div className="Content">
          <Sidebar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        {pathname !== '/home' && <Footer />}
      </div>
    </CartProvider>
  )
}

export default App
