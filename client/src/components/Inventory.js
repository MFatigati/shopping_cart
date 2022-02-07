import React from "react";
import Product from "./Product"
import data from "../../src/lib/data"

const Inventory = () => {
  return (
    <div class="product-listing">
    <h2>Products</h2>
    <ul>
      {data.map(product => {
        return (
          <li key={product.id}> <Product title={product.title} price={product.price} quantity={product.quantity} /></li>
        )
      })}
    </ul>
  </div>
  )
}

export default Inventory;