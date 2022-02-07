import React from "react";

const Cart = () => {
  return (
    <div class="cart">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
      <p>Total: $0</p>
      <a href="/#" class="button checkout disabled">Checkout</a>
    </div>
  )
}

export default Cart;