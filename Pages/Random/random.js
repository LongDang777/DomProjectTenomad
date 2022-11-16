import getUser from "./utils/getUser.js";

const getElement = selector => document.querySelector(selector);

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btnIcons = [...document.querySelectorAll(".icon")];
const btnRandom = getElement(".btn");

const showUser = async () => {
  img.classList.remove('animationImg')
  const person = await getUser();
  displayUser(person);
};

const displayUser = person => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = 'Hi, My name is';
  btnIcons.forEach((icon) => icon.classList.remove("active"));
  btnIcons[0].classList.add("active");
  img.classList.add('animationImg')

  btnIcons.forEach((btn) => {
    const id = btn.dataset.id;
    btn.addEventListener("click", () => {
      title.textContent = `My ${id} is `;
      value.textContent = person[id];
      btnIcons.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

window.addEventListener("DOMContentLoaded", showUser);
btnRandom.addEventListener("click", showUser);