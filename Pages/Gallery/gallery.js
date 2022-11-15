function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  constructor(element) {
    this.container = element;
    this.images = [...element.querySelectorAll('.img')];

    this.modalSection = getElement('.modal');
    this.modalImg = getElement('.main-img');
    this.imageName = getElement('.image-name');
    this.modalImages = getElement('.modal-images');
    this.closeBtn = getElement('.close-btn');
    this.nextBtn = getElement('.next-btn');
    this.prevBtn = getElement('.prev-btn');

    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);

    this.container.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('img')) {
          this.openModal(e.target, this.images);
        }
      }.bind(this)
    );
  }
  openModal(selectedImage, images) {

    this.setMainImage(selectedImage);

    this.modalImages.innerHTML = images.map(({ src, title, dataset }) => {
      return `<img src="${src}" title="${title}" data-id="${dataset.id}" class="${selectedImage.dataset.id === dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
    })
      .join('');

    this.modalSection.classList.add('open');
    this.modalImages.addEventListener('click', this.chooseImage);
    this.closeBtn.addEventListener('click', this.closeModal);
    this.nextBtn.addEventListener('click', this.nextImage);
    this.prevBtn.addEventListener('click', this.prevImage);
  }

  setMainImage({ src, title }) {
    this.modalImg.src = src;
    this.imageName.textContent = title;
  }

  chooseImage(e) {
    if (e.target.classList.contains('modal-img')) {
      const selected = this.modalImages.querySelector('.selected');
      selected.classList.remove('selected');

      this.setMainImage(e.target);
      e.target.classList.add('selected');
    }
  }

  closeModal() {
    this.modalSection.classList.remove('open');
  }

  nextImage() {
    const selected = this.modalImages.querySelector('.selected');
    // get next child || first child
    const next = selected.nextElementSibling || this.modalImages.firstElementChild;

    selected.classList.remove('selected');
    next.classList.add('selected');
    this.setMainImage(next);
  }

  prevImage() {
    const selected = this.modalImages.querySelector('.selected');
    // get prev child || last child
    const prev = selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
  }
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));