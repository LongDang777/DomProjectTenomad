const data = [
  {
    id: 'colorFlipper',
    href: './Pages/colorFipper/colorFipperSimple.html',
    img: './img/image01.webp',
    footer: 'Color Fliper'
  },
  {
    id: 'counter',
    href: './Pages/counter/counter.html',
    img: './img/image02.webp',
    footer: 'Simple Counter'
  },
  {
    id: 'review',
    href: './Pages/ReviewQuotes/review.html',
    img: './img/image03.webp',
    footer: 'Rewiews Quotes'
  },
  {
    id: 'navbar',
    href: './Pages/Navbar/navbar.html',
    img: './img/image04.webp',
    footer: 'Navbar'
  },
  {
    id: 'navbar',
    href: './Pages/Navbar/navbar.html',
    img: './img/image05.webp',
    footer: 'Navbar'
  }
]

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
