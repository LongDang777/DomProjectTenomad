import { getElement } from "./utils.js";

const openNav = getElement('.toggle-nav');
const closeNav = getElement('.sidebar-close');
const sidebar = getElement('.sidebar-overlay');

openNav.addEventListener('click', ()=>{
  console.log('kaka');
  sidebar.classList.add('show');
})

closeNav.addEventListener('click', ()=>{
  sidebar.classList.remove('show');
})
