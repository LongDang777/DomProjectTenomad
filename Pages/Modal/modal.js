const qeryClass = clas => document.querySelector(clas);

const modalBtn = qeryClass(".modal-btn");
const modal = qeryClass(".modal-overlay");
const closeBtn = qeryClass(".close-btn");

modalBtn.onclick = () => {
  modal.classList.add("open-modal");
};
closeBtn.onclick = () => {
  modal.classList.remove("open-modal");
};
