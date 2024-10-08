import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/context'
import './cake.css'
import { Picture } from '../Picture/picture'
import cakes from '../../cakes.json'

const cakesMapToObject = cakes.reduce((acc, cake) => {
  return { ...acc, [cake.id]: cake }
}, {})

export const Cake = ({ id }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart({ id })
  }
  const cake = cakesMapToObject[id]

  return (
    <div
      className="Cake"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Picture picture={cake?.picture} />
      <h3>{cake?.name}</h3>
      <p>{cake?.price} грн</p>

      {isHovered && (
        <div className="cake-hover-info">
          <p>{cake?.description}</p>
          <button onClick={handleAddToCart}>Замовити</button>
        </div>
      )}
    </div>
  )
}
