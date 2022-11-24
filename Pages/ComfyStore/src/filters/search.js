import display from "../displayProducts.js";
import { getElement } from "../utils.js";

const setupSearch = (store) => {
  const form = getElement(".input-form");
  const input = getElement(".search-input");
  const containerProducts = getElement(".products-container");

  const debounce = (fn, delay) => {
    delay = delay || 0;
    let timerId;
    return () => {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      timerId = setTimeout(() => {
        fn();
      }, delay);
    };
  };

  let newStore;

  const filterStore = (arr, value) => {
     newStore = arr.filter((product) => {
      let { name } = product;
      name = name.toLowerCase();
      if (name.includes(value)) return product;
    });
    display(newStore, containerProducts, true);
  };

  form.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();

    if (value.trim() !== "") {
      debounce(filterStore(store, value), 3000);

      if (newStore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`;
      }
    } else {
      display(store, containerProducts, true);
    }
  });
};
export default setupSearch;
