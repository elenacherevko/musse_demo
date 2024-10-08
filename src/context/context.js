import React, { createContext, useState, useEffect } from 'react'
import cakes from '../cakes.json'

const cakesMapToObject = cakes.reduce((acc, cake) => {
  return { ...acc, [cake.id]: cake }
}, {})

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isLoadedFromLocalStorage, setIsLoadedFromLocalStorage] =
    useState(false)

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'))
    if (storedCartItems) {
      setCartItems(storedCartItems)
    }
    setIsLoadedFromLocalStorage(true)
  }, [])

  const addToCart = (cake) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === cake.id)
      if (existingItem) {
        const newItems = prevItems.map((item) =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
        localStorage.setItem('cartItems', JSON.stringify(newItems))
        return newItems
      } else {
        localStorage.setItem(
          'cartItems',
          JSON.stringify([...prevItems, { ...cake, quantity: 1 }]),
        )
        return [...prevItems, { ...cake, quantity: 1 }]
      }
    })
  }
  const changeQuantity = (cakeId, quantity) => {
    setCartItems((prevItems) => {
      const indexOfItem = prevItems.findIndex((item) => item.id === cakeId)
      const newItems = [...prevItems]
      newItems[indexOfItem] = { ...newItems[indexOfItem], quantity: quantity }

      localStorage.setItem('cartItems', JSON.stringify(newItems))
      return newItems
    })
  }

  const removeFromCart = (cakeId) => {
    setCartItems((prevItems) => {
      const itemInList = prevItems.filter((item) => item.id !== cakeId)
      localStorage.setItem('cartItems', JSON.stringify(itemInList))
      return itemInList
    })
  }
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const totalAmount = cartItems.reduce(
    (sum, item) =>
      sum + parseInt(cakesMapToObject[item.id]?.price) * item?.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalAmount,
        cartCount,
        changeQuantity,
        isLoadedFromLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
