import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
console.log(cart);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h2 className="cart-item-title">{item.title}</h2>
              <p className="cart-item-price">${item.price}</p>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-actions">
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
            <Link to="/checkout">
              <button className="checkout-button">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;