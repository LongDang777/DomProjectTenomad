const data = [
  {
    id: 'colorFlipper',
    href: './Pages/colorFipper/colorFipperSimple.html',
    img: './img/image01.webp',
    footer: 'Color Fliper'
  },
  {
    id: 'counter',
    href: './Pages/SimpleCounter/counter.html',
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
  },
  {
    id: 'tabs',
    href: './Pages/Tabs/tabs.html',
    img: './img/image11.webp',
    footer: 'Tabs'
  },
  {
    id: 'countDown',
    href: './Pages/Countdown/countDown.html',
    img: './img/image12.webp',
    footer: 'CountDown Timer'
  },
  {
    id: 'lorem',
    href: './Pages/Lorem/lorem.html',
    img: './img/image13.webp',
    footer: 'Lorem Ipsum'
  },
  {
    id: 'Grocery',
    href: './Pages/Grocery/grocery.html',
    img: './img/image14.webp',
    footer: 'Grocery Bud'
  },
  {
    id: 'Slider',
    href: './Pages/Slider/slider.html',
    img: './img/image15.webp',
    footer: 'Slider'
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


const courses = [
  {
    id: 'counter',
    href: './Pages/Counter/counter.html',
    img: './img/image16.webp',
    footer: 'Counter'
  },
  {
    id: 'gallery',
    href: './Pages/Gallery/gallery.html',
    img: './img/image17.webp',
    footer: 'Gallery'
  },
  {
    id: 'numbers',
    href: './Pages/Numbers/numbers.html',
    img: './img/image18.webp',
    footer: 'Numbers'
  },
  {
    id: 'darkMode',
    href: './Pages/DarkMode/darkMode.html',
    img: './img/image19.webp',
    footer: 'Dark Mode'
  },
  {
    id: 'filters',
    href: './Pages/Filters/filters.html',
    img: './img/image20.webp',
    footer: 'Filters'
  },
  {
    id: 'darkJokes',
    href: './Pages/DadJokes/dadjokes.html',
    img: './img/image21.webp',
    footer: 'Dad Jokes'
  },
  {
    id: 'products',
    href: './Pages/Products/products.html',
    img: './img/image22.webp',
    footer: 'Products'
  },
  {
    id: 'ramdonUser',
    href: './Pages/Random/random.html',
    img: './img/image23.webp',
    footer: 'Random User'
  },
  {
    id: 'Cocktails',
    href: './Pages/Cocktails/cocktails.html',
    img: './img/image24.webp',
    footer: 'Cocktails'
  }
]

const course = courses.map(item => (
  `<a class='section__item' href=${item.href} target="_blank" key=${item.id}>
    <div class='item__content'>
      <img class='item__content-img' src=${item.img} alt=${item.id}/>
    </div>
    <footer class='item__footer'>
      <h5>${item.footer}</h5>
    </footer>
  </a>`
))


document.getElementById('courses').innerHTML = course.join('')