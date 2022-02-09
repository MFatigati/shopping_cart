import React from "react";
import Product from "./Product"
//import data from "../../src/lib/data"
import { useEffect, useState } from "react";
import axios from 'axios'

const Inventory = ({products, onDelete, onEdit, onAddToCart}) => {

  return (
    <div class="product-listing">
    <h2>Products</h2>
    <ul>
      {products.map(product => {
        return (
          <Product key={product._id} id={product._id} title={product.title} price={product.price} quantity={product.quantity} onDelete={onDelete} onEdit={onEdit} handleAddToCart={onAddToCart}/>
        )
      })}
    </ul>
  </div>
  )
}

export default Inventory;