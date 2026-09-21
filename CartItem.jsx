import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert("Thank you for shopping at Paradise Nursery!");
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>

            <div>
              <button
                className="quantity-btn"
                onClick={() => handleDecrease(item.id)}
              >
                -
              </button>

              <span style={{ margin: "0 10px" }}>{item.quantity}</span>

              <button
                className="quantity-btn"
                onClick={() => handleIncrease(item.id)}
              >
                +
              </button>
            </div>

            <button
              className="delete-btn"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>

      <button className="checkout-btn" onClick={handleCheckout}>
        Checkout
      </button>

      <Link to="/products">
        <button className="continue-btn">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;
