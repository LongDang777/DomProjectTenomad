import fetUser from "./fetUser.js";
import renderBtn from "./renderBtnPage.js";
import renderUsers from "./renderUser.js";

const btnContainer = document.querySelector(".btn-container");
const title = document.querySelector(".section-title h1");

let index = 1;
const url = (page) => `http://localhost:3000/get?_page=${page}`;

const init = (users, indexPage)=>{
  renderBtn(btnContainer, indexPage);
  renderUsers(users);
}

const data = async (indexPage) => {
  title.textContent = "pagination";
  const users = await fetUser(url(indexPage));
  init(users, indexPage)
};

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > 10) {
      index = 1;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = 1;
    }
  }
  data(index)
});

window.addEventListener("load", data(index));
