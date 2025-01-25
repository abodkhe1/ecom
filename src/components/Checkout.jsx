import React from 'react';
import { useCart } from '../CartContext';
import './Checkout.css'; 

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty. Please add items to your cart before checking out.</p>
      ) : (
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <h3 className="checkout-item-title">{item.title}</h3>
              <p className="checkout-item-price">${item.price}</p>
            </div>
          ))}
          <p className="total-price">
            Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
          <button className="checkout-button" onClick={handleCheckout}>Complete Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;