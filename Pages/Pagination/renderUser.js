const container = document.querySelector(".container");

const renderUsers = (users) => {
  const itemUser = users.map((item) => {
      const { avatar_url, login, html_url } = item;

      return `
      <article class='card'>
       <img src=${avatar_url} alt="item" />
       <h4>${login}</h4>
       <a href=${html_url} class='btn'>View profile</a>
      </article>
      `;
    })
    .join("");

  container.innerHTML = itemUser;
};

export default renderUsers;
