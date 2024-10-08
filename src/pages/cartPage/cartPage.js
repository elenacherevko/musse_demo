import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/context'
import './cartPage.css'
import cakes from '../../cakes.json'

const cakesMapToObject = cakes.reduce((acc, cake) => {
  return { ...acc, [cake.id]: cake }
}, {})

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    totalAmount,
    changeQuantity,
    isLoadedFromLocalStorage,
  } = useContext(CartContext)

  useEffect(() => {
    if (isLoadedFromLocalStorage && totalAmount < 1) {
      window.location.href = '/'
    }
  }, [cartItems, isLoadedFromLocalStorage])

  return (
    <div className="cartPage">
      <h2>Корзина</h2>
      <div className="cartContainer">
        <div className="cartItems">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item, index) => (
                <div className="cartItem" key={index}>
                  <img
                    src={cakesMapToObject[item.id]?.picture}
                    alt={cakesMapToObject[item.id]?.name}
                    className="itemImage"
                  />
                  <div className="itemDetails">
                    <h3>{item.name}</h3>
                    <p>Ціна: {cakesMapToObject[item.id]?.price}</p>
                    <p>Кількість: {item.quantity}</p>
                    <div className="itemPrice-buttons">
                      <button
                        onClick={() =>
                          changeQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      {item.quantity > 1 && (
                        <button
                          onClick={() =>
                            changeQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      )}
                      <button onClick={() => removeFromCart(item.id)}>
                        Видалити
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <h3>Разом: {totalAmount} грн</h3>
            </>
          ) : (
            <p>Корзина пуста</p>
          )}
        </div>

        <div className="orderForm">
          <h3>Оформлення замовлення :</h3>
          <form>
            <div className="formGroup">
              <label htmlFor="name">Ім'я:</label>
              <input type="text" id="name" required />
            </div>
            <div className="formGroup">
              <label htmlFor="address">Адреса доставки:</label>
              <input type="text" id="address" required />
            </div>
            <div className="formGroup">
              <label htmlFor="payment">Спосіб оплати:</label>
              <select id="payment" required>
                <option value="card">Карткою</option>
                <option value="cash">Готівкою</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
            <button type="submit">Підтвердити замовлення</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CartPage
