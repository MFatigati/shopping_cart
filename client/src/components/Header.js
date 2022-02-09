import React from "react";
import Cart from "./Cart"

const Header = ({ cartItems, onCheckOut, setCartItems }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cartItems={cartItems} setCartItems={setCartItems} onCheckOut={onCheckOut}/>
    </header>
  )
}

export default Header;