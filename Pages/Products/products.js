const api = 'https://course-api.com/javascript-store-products';

const DomProducts = document.querySelector('.products-center');

const getProducts = async () => {
  DomProducts.innerHTML = `<div class='loading'></div>`
  try {
    const res = await fetch(api)
    const data = await res.json();
    return data
  } catch (err) {
    DomProducts.innerHTML = `<p class='error'>There is an error due to the api</p>`
    console.log('Lỗi APi ==>', err);
  }
}
const renderProduct = (products) => {
  const list =  products.map((product) => {
    const { id } = product;
    const { name: title, price } = product.fields;
    const { url: img } = product.fields.image[0];
    const formatPrice = price / 100;

    return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
  }).join('');
  
  DomProducts.innerHTML = ` <div class="products-container">
                              ${list}
                            </div>`;
}

const start = async () => {
  const products  = await getProducts()
  renderProduct(products)
  // getProducts().then(products => 
  //   renderProduct(products)
  // )
};

start();
