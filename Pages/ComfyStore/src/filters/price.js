import { getElement } from "../utils.js";
import display from "../displayProducts.js";


const setupPrice = (products) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  let MaxPrice = products.map((product) => product.price);

  MaxPrice = Math.max(...MaxPrice);
  MaxPrice = Math.max(MaxPrice / 100);

  priceInput.value = MaxPrice;
  priceInput.max = MaxPrice;
  priceInput.min = 0;

  priceValue.textContent = `Value: $${MaxPrice}`;

  priceInput.addEventListener("input", () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value: $${value}`;

    let newProducts = products.filter(product => product.price/ 100 <= value  )

    display(newProducts, getElement('.products-container'), true);
    if (newProducts.length < 1) {
      const products = getElement('.products-container');
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  });
};

export default setupPrice
