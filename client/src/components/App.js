import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import AddProductForm from "./AddProductForm";
import { useEffect, useState } from "react";
import { SERVICES } from "../services"


const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    SERVICES.getCartItems(setCartItems);
    SERVICES.getProducts(setProducts);
  }, [])

  return (
    <div id="app">
      <Header cartItems={cartItems} setCartItems={setCartItems} onCheckOut={SERVICES.handleCheckout} />
      <main>
        <Inventory products={products} setProducts={setProducts} onDelete={SERVICES.handleDelete} onEdit={SERVICES.handleEdit} cartItems={cartItems} setCartItems={setCartItems} onAddToCart={SERVICES.handleAddToCart}/>
        <AddProductForm products={products} setProducts={setProducts} onAddProduct={SERVICES.handleAddProduct}/>
      </main>
    </div>
  );
};

export default App;
