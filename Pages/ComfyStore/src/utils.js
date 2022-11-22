const allProductsUrl = "https://course-api.com/javascript-store-products";
const singleProductUrl = "https://course-api.com/javascript-store-single-product";

const getElement = (selector) => document.querySelector(selector);

const formatPrice = (price) => {
  let formattedPice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return formattedPice;
};

const getLocalStorageItem = (item) => {
  let itemLocal = localStorage.getItem(item);
  if (itemLocal) {
    itemLocal = JSON.parse(localStorage.getItem(item));
  } else {
    itemLocal = [];
  }
  return itemLocal;
};

const setLocalStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  getElement,
  allProductsUrl,
  singleProductUrl,
  formatPrice,
  getLocalStorageItem,
  setLocalStorageItem,
};
