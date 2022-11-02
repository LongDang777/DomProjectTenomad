import data from "./data.js";

const items = data.map(item => (
  `<a class='section__item' href=${item.href} target="_blank" key=${item.id}>
    <div class='item__content'>
      <img class='item__content-img' src=${item.img} alt=${item.id}/>
    </div>
    <footer class='item__footer'>
      <h5>${item.footer}</h5>
    </footer>
  </a>`
))

document.getElementById('projects').innerHTML = items.join('')
