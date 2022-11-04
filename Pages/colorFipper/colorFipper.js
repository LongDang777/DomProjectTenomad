const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const getRandomIndexOfColors = (ArrColor) => Math.floor(Math.random() * ArrColor.length);

const handleColorDuplicate = (value) => colors.filter(item => item !== value)

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {

  const prevColor = color.textContent;
  let indexColor = getRandomIndexOfColors(colors);

  //case of color repetition
  if (prevColor === colors[indexColor]) {
    const newArrColors = handleColorDuplicate(prevColor);
    indexColor = getRandomIndexOfColors(newArrColors)
  }
  document.body.style.backgroundColor = colors[indexColor];
  color.textContent = colors[indexColor];
});
