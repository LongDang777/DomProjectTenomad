import sublinks from "./data.js";

const getElement = (selector) => document.querySelector(selector);

const toggleBtn = getElement(".toggle-btn");
const closeBtn = getElement(".close-btn");
const popoperWrapper = getElement(".popoper-wrapper");
const popoper = getElement(".popoper-links");
const submenu = getElement(".submenu");
const hero = getElement(".hero");
const nav = getElement(".nav");
const linkBtns = [...document.querySelectorAll(".link-btn")];
// hide/show sideabar
toggleBtn.addEventListener("click", () => {
  popoperWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  popoperWrapper.classList.remove("show");
});


// set popoper
popoper.innerHTML = sublinks
  .map((item)=> {
    const { links, page } = item;
    return`
    <article>
      <h4>${page}</h4>
      <div class="popoper-sublinks">
       ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join("")}
      </div>
    </article>`;
  })
  .join("");

linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const tempPage = sublinks.find((link) => link.page === text);

    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add("show");
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // OPTIONAL
      let columns = "col-2";
      if (links.length === 3) {
        columns = "col-3";
      }
      if (links.length > 3) {
        columns = "col-4";
      }

      submenu.innerHTML = `
        <section>
          <h4>${page}</h4>
          <div class="submenu-center ${columns}">
            ${links
              .map((link) => {
                return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
              })
              .join("")}
          </div>
        </section>`;
    }
  });
});

hero.addEventListener("mouseover", (e) => {
  submenu.classList.remove("show");
});

nav.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
