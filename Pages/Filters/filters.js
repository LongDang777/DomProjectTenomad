
let filProducts = [...products];

const getElement = selector => document.querySelector(selector)

const productsContainer = getElement('.products-container');

const displayProducts = (productArray) => {
  if (productArray.length < 1) {
    productsContainer.innerHTML = `<h5>Sorry, no products matched your search</h5>`;
    return;
  }

  productsContainer.innerHTML = productArray
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join('');
};

displayProducts(filProducts);

// Text Filter

const form = getElement('.input-form');

const input = getElement('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = input.value;
  if (inputValue.trim().length > 0) {
    if (inputValue.length > 0) {
      const newProducts = [...products].filter(({ title }) => {
        return title.toLowerCase().includes(inputValue);
      });
      displayProducts(newProducts);
    }
  }
});

// Filter Buttons

const companiesDOM = getElement('.companies');

const displayButtons = () => {
  const buttons = [
    'all', ...new Set(products.map(({ company }) => company)),
  ];

  companiesDOM.innerHTML = buttons.map(company => {
    return `<button class='company-btn' data-id="${company}">${company}</button>`;
  })
    .join('');
};

displayButtons();

const filterCompany = (e) => {
  const btn = e.target;
  if (btn.dataset.id === 'all') {
    filProducts = [...products];
  } else {
    filProducts = products.filter(({ company }) => {
      return company === btn.dataset.id;
    });
  }
  input.value = '';
  displayProducts(filProducts);
}  

companiesDOM.addEventListener('click', (e) => {
  const btn = e.target;
  if (btn.classList.contains('company-btn')) {
    // btn.classList.add('active')

    if (btn.dataset.id === 'all') {
      filProducts = [...products];
    } else {
      filProducts = products.filter(({ company }) => {
        return company === btn.dataset.id;
      });
    }
    input.value = '';
    displayProducts(filProducts);
  }
});
