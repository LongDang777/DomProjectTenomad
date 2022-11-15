const items = document.querySelectorAll('.number');

const counterUp = (counter) => {
  const value = parseInt(counter.dataset.value);
  const initValue = Math.ceil(value / 1000);
  let counterUp = 0;

  const increaseCount = setInterval(() => {
    counterUp += initValue
    if (counterUp > value) {
      clearInterval(increaseCount)
      return
    }
    counter.textContent = `${counterUp}+`
  }, 1)
}

items.forEach(item => counterUp(item))
