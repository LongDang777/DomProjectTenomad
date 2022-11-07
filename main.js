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
    id: 'sidebar',
    href: './Pages/Sidebar/sidebar.html',
    img: './img/image05.webp',
    footer: 'Sidebar'
  },
  {
    id: 'modal',
    href: './Pages/Modal/modal.html',
    img: './img/image06.webp',
    footer: 'Modal'
  },
  {
    id: 'question',
    href: './Pages/Question/question.html',
    img: './img/image07.webp',
    footer: 'Question'
  },
  {
    id: 'menu',
    href: './Pages/Menu/menu.html',
    img: './img/image08.webp',
    footer: 'Menu'
  },
  {
    id: 'video',
    href: './Pages/Video/video.html',
    img: './img/image09.webp',
    footer: 'Video'
  },
  {
    id: 'croll',
    href: './Pages/Scroll/scroll.html',
    img: './img/image10.webp',
    footer: 'Sroll'
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
