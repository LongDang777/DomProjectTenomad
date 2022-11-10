const qeryClass = clas => document.querySelector(clas);
const getId = id => document.getElementById(id);

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// set height auto toggle navbar 
const navToggle = document.querySelector('.nav-toggle');
const navLists = document.querySelector('.links-container');

const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle("show-links");
  const navLinksHeight = navLists.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (navLinksHeight === 0) {
    navLists.style.height = `${linksHeight}px`;
  } else {
    navLists.style.height = 0
  }
})
navLists.addEventListener('click', ()=>{
  navLists.style.height = 0;
})

// fixed navbar 
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
    navLists.style.height = 0

  } else {
    navbar.classList.remove("fixed-nav");
  }

  //back to top
  if (window.pageYOffset > 200) {
    topLink.classList.add("move-top");
  } else {
    topLink.classList.remove("move-top");
  }
});


