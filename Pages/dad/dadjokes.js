const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Long Dang',
      },
    });
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    console.log('Loi API: ==> ', error.message);
  }
};

fetchDadJoke();




