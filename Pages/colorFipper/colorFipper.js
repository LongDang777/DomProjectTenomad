const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector('.color');
const btn = document.getElementById('btn')

const getIndexColor = (arrColors) => Math.floor(Math.random() * arrColors.length);
const filterColors = (preColor) => colors.filter(item => item !== preColor);

btn.onclick = ()=>{
  const prevColor = document.body.style.backgroundColor;
  const newColors = filterColors(prevColor);
  const indexColor = getIndexColor(newColors)
  color.textContent = newColors[indexColor];
  document.body.style.backgroundColor = newColors[indexColor];
}
