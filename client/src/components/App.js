// https://github.com/launchschool/shopping_cart_boilerplate/blob/main/docs/api.md

import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import AddProductForm from "./AddProductForm";
import { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      let response = await axios.get("api/products")
      setProducts(response.data);
      //console.log(response.data);
    }

    const getCartItems = async () => {
      let response = await axios.get("api/cart")
      setCartItems(response.data);
      console.log(response);
    }
    
    getCartItems();
    getProducts();
  }, [])



  const handleAddProduct = async (newProduct) => {
    const response = await axios.post("/api/products", { ...newProduct });
    const data = response.data;
    setProducts(products.concat(data));
  }

  const handleDelete = async (id) => {
    const response = await axios.delete(`/api/products/${id}`);
    if (response.status === 200) {
      setProducts(products.filter(product => id !== product._id));
    } else {
      console.log("Product was not deleted.")
    }
  }

  const handleEdit = async (updatedProduct) => {
    const response = await axios.put(`/api/products/${updatedProduct._id}`, updatedProduct);
    const data = response.data;
    setProducts(products.map(record => {
      if (record._id === updatedProduct._id) {
        return data
      } else {
        return record
      }
    }));
  }

  const handleAddToCart = async (id) => {
    let productToAdd = products.filter(product => {
      return product._id === id
    })[0];
    let quantity = productToAdd.quantity;

    productToAdd = {
      productId: productToAdd._id,
      title: productToAdd.title,
      price: productToAdd.price
    }

    if (quantity > 0) {
      console.log(productToAdd)
      const response = await axios.post("/api/add-to-cart", productToAdd);
      const data = response.data;
      if (response.status === 200) {
        console.log(data);
      } else {
        console.log("Not added to cart");
      }
    }

    console.log(productToAdd);
    
  }

  return (
    <div id="app">
      <Header />
      <main>
        <Inventory products={products} onDelete={handleDelete} onEdit={handleEdit} onAddToCart={handleAddToCart}/>
        <AddProductForm onAddProduct={handleAddProduct}/>
      </main>
    </div>
  );
};

export default App;

/* import React from "react";

const App = () => {
  return (
    <div id="app">
      <h1>Welcome hi</h1>
    </div>
  );
};

export default App; */
