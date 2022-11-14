const number = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(btn => {
  btn.onclick = (e) => {
    const contain = (value) => e.target.classList.contains(value)

    contain('decrease')
      ? (count--, number.style.color = 'red')
      : contain('increase')
        ? (count++, number.style.color = 'green')
        : (count = 0, number.style.color = '#222');

    number.textContent = count;
  }
})
