import React from "react";

const Product = (props) => {
  return (
    <>
      <div class="product">
        <div class="product-details">
          <h3>{props.title}</h3>
          <p class="price">{props.price}</p>
          <p class="quantity">{props.quantity} left in stock</p>
          <div class="actions product-actions">
            <a href="/#" class="button add-to-cart">Add to Cart</a>
            <a href="/#" class="button edit">Edit</a>
          </div>
          <a href="/#" class="delete-button"><span>X</span></a>
        </div>
      </div>
  </>
  )
}

export default Product;