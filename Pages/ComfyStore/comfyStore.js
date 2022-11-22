import "./src/sidebar.js";
import "./src/cart/toggleCart.js";
import fetProducts from "./src/fetchProducts.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";
import { setUpStore, store } from "./src/store.js";

const init = async () => {
  const products = await fetProducts();

  setUpStore(products)
  
  const featured = store.filter(product => {
   return  product.featured === true
  })
  display(featured, getElement(".featured-center"));
};



window.addEventListener("DOMContentLoaded", init);
