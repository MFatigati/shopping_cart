import React from "react";
import Product from "./Product"

const Inventory = ({products, onDelete, onEdit, onAddToCart, setProducts, cartItems, setCartItems}) => {

  return (
    <div class="product-listing">
    <h2>Products</h2>
    <ul>
      {products.map(product => {
        return (
          <Product key={product._id} products={products} id={product._id} title={product.title} price={product.price} quantity={product.quantity} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} onDelete={onDelete} onEdit={onEdit} handleAddToCart={onAddToCart}/>
        )
      })}
    </ul>
  </div>
  )
}

export default Inventory;