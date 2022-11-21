import fetUser from "./fetUser.js";
import paginate from "./panigate.js";
import renderBtn from "./renderBtnPage.js";
import renderUsers from "./renderUser.js";

const btnContainer = document.querySelector(".btn-container");
const title = document.querySelector(".section-title h1");
let index = 0;
let pages = [];

const setupUI = () => {
  renderUsers(pages[index]);
  renderBtn(btnContainer, pages, index);
};

const data = async () => {
  const users = await fetUser();
  title.textContent = "pagination";
  pages = paginate(users);
  setupUI();
};

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index)
  }
  if (e.target.classList.contains('next-btn')) {
    index++
    if (index > pages.length - 1) {
      index = 0
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--
    if (index < 0) {
      index = pages.length - 1
    }
  }
  setupUI()
})

window.addEventListener('load', data)
