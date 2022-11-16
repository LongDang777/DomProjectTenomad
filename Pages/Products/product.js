const productDom = document.querySelector('.product');
const apiProduct = 'https://course-api.com/javascript-store-single-product';

const getProduct = async () => {
  productDom.innerHTML = `<div class='singleLoading'></div>`
  const params = new URLSearchParams(window.location.search);
  // get id form products https://course-api.com/javascript-store-products
  const id = params.get('id');

  try {
    const res = await fetch(`${apiProduct}?id=${id}`);
    const product = await res.json();
    return product
  }
  catch (err) {
    console.log('Lỗi single Product api ==> ', err.message);
    productDom.innerHTML = '<p class="error">There was a problem loading the product. Please try again later</p>';
  }
}

const renderProduct = (product) => {
  const { company, colors, description, price, image, name: title } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();

  const colorsProduct = colors.map(color => (
    `<span class='product-color' style="background: ${color}"></span>`
  )).join('')

  productDom.innerHTML =
    `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100} $</span>
          <div class="colors">
            ${colorsProduct}
          </div>
          <p><!--${description}--></p>
          <button class="btn">add to cart</button>
        </div>
     </div>`;
};

const start = () => {
  getProduct().then(product =>
    renderProduct(product)
  )
};

start();
