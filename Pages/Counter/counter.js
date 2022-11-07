
const number = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(btn => {
  btn.addEventListener('click', e =>{
    const classList = e.target.classList;
    classList.contains('decrease')
      ? (count--, number.style.color = 'red')
      : classList.contains('increase')
      ? (count++, number.style.color = 'green')
      :(count = 0, number.style.color = '#222');

      number.textContent = count;
  })
})

