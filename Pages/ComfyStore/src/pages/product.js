import '../sidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js'
import { addToCart } from "../cart/setupCart.js";
import { formatPrice, getElement, singleProductUrl } from "../utils.js";

const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-carousel-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

let productId;

window.addEventListener("DOMContentLoaded", async () => {
  const urlId = window.location.search;

    const res = await fetch(`${singleProductUrl}${urlId}`);
    const product = await res.json();
    const { id, fields } = product;
    productId = id;

    const { name, company, price, colors, description } = fields;
    const image = fields.image[0].thumbnails.large.url;

    document.title = `${name.toUpperCase()} | Comfy`;
    pageTitleDOM.textContent = `Home / ${name}`;
    imgDOM.src = image;
    titleDOM.textContent = name;
    companyDOM.textContent = `by ${company}`;
    priceDOM.textContent = formatPrice(price);
    descDOM.textContent = description;

    colors.forEach((color) => {
      const span = document.createElement('span');
      span.classList.add('product-color');
      span.style.backgroundColor = `${color}`;
      colorsDOM.appendChild(span);
    });

    loading.style.display = 'none';
});

cartBtn.addEventListener('click', ()=> {
  addToCart(productId);
});