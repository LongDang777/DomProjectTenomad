import { findProduct } from "../store.js";
import {
  formatPrice,
  getElement,
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils.js";
import addToCartDom from "./addTocartDom.js";
import { openCart } from "./toggleCart.js";

const cartItemCountDom = getElement(".cart-item-count");
const cartItemDom = getElement(".cart-items");
const cartTotalDom = getElement(".cart-total");

let cart = getLocalStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);

  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDom(product);
  } else {
    const amount = increaseAmount(id);
    const items = [...cartItemDom.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  displayCartItemCount();
  displayCartTotal();
  setLocalStorageItem("cart", cart);
  openCart();
};

const displayCartItemCount = () => {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDom.textContent = amount;
};
function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDom(cartItem);
  });
}
const displayCartTotal = () => {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDom.textContent = `Total : ${formatPrice(total)} `;
};

const removeItem = (id) => {
  cart = cart.filter((cartItem) => cartItem.id !== id);
};

const increaseAmount = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};

const decreaseAmount = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};

const setupCartFunctionality = () => {
  cartItemDom.addEventListener("click", (e) => {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentID = e.target.parentElement.dataset.id;

    if (parent.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);
      element.parentElement.parentElement.remove();
    }
    displayCartItemCount();
    displayCartTotal();
    setLocalStorageItem("cart", cart);
  });
};

const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
  setupCartFunctionality();
};
init();
