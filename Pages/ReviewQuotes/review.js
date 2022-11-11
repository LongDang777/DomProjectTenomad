// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    description:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    description:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    description:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    description:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const getId = (id) => document.getElementById(id);
const getClass = (itemClass) => document.querySelector(itemClass)

const img = getId("person-img");
const author = getId("author");
const job = getId("job");
const info = getId("info");

const prevBtn = getClass(".prev-btn");
const nextBtn = getClass(".next-btn");
const randomBtn = getClass(".random-btn");

let currentPerson = 0;

const showPerson = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.description;
}
showPerson(currentPerson);

nextBtn.addEventListener('click', () => {
  currentPerson++;
  if (currentPerson > reviews.length - 1) {
    currentPerson = 0;
  }
  showPerson(currentPerson);
});

prevBtn.addEventListener('click', () => {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = reviews.length - 1;
  }
  showPerson(currentPerson);
})

randomBtn.addEventListener('click', () => {
  currentPerson = Math.floor(Math.random() * reviews.length)
  showPerson(currentPerson);
})