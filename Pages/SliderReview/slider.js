import data from "./data.js";

const getElement = (element) => document.querySelector(element);

const container = getElement(".slide-container");
const nextBtn = getElement(".next-btn");
const prevBtn = getElement(".prev-btn");

let people = [...data];

container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next";

    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }

    return (
      `<article class="slide ${position}">
        <img src=${img} class="img" alt="${name}" />
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">${text}</p>
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
      </article>`
    );
  })
  .join("");

const startSlider = (type) => {
  const active = getElement(".active");
  const last = getElement(".last");
  let next = active.nextElementSibling || container.firstElementChild;
  
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling || container.lastElementChild;
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};
nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
