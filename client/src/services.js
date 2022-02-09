import axios from "axios";

export const SERVICES = {
  getProducts: async (setProducts) => {
    let response = await axios.get("api/products")
    setProducts(response.data);
  },
  
  getCartItems: async (setCartItems) => {
    let response = await axios.get("api/cart")
    setCartItems(response.data);
  },

  handleAddProduct: async (setProducts, products, newProduct) => {
    const response = await axios.post("/api/products", { ...newProduct });
    const data = response.data;
    setProducts(products.concat(data));
  },

  handleDelete: async (id, setProducts, products) => {
    const response = await axios.delete(`/api/products/${id}`);
    if (response.status === 200) {
      setProducts(products.filter(product => id !== product._id));
    } else {
      console.log("Product was not deleted.")
    }
  },

  handleEdit: async (updatedProduct, setProducts, products) => {
    const response = await axios.put(`/api/products/${updatedProduct._id}`, updatedProduct);
    const data = response.data;
    setProducts(products.map(record => {
      if (record._id === updatedProduct._id) {
        return data
      } else {
        return record
      }
    }));
  },

  handleAddToCart: async (id, setProducts, products, setCartItems, cartItems) => {
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
      const response = await axios.post("/api/add-to-cart", productToAdd);
      console.log(response);
      const cartItem = response.data.item;
      const product = response.data.product

      if (response.status === 200) {
        let cartItemExists = cartItems.filter(item => item.productId === id);
        if (cartItemExists.length > 0) {
          setCartItems(cartItems.map(record => {
            console.log("idInCart ", record.productId, "addedItemId ", id)
            if (record.productId === id) {
              return cartItem
            } else {
              return record
            }
          }));
        } else {
          setCartItems(cartItems.concat(cartItem));
        }

        setProducts(products.map(record => {
          if (record._id === id) {
            return product
          } else {
            return record
          }
        }));
      } else {
        console.log("Not added to cart");
      }
    } 
  },

  handleCheckout: async (setCartItems) => {
    const response = await axios.post("api/checkout");
    if (response.status === 200) {
      setCartItems([])
    } else {
      console.log("Cannot checkout");
    }
  }
}