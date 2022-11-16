const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  const person = data.results[0];
  const { phone, email } = person;
  const { number, name } = person.location.street;
  const { password } = person.login;
  const { first, last } = person.name;
  const { age } = person.dob;
  const image = person.picture.large;

  return {
    phone,
    email,
    street: `${number} ${name}`,
    password,
    name: `${first} ${last}`,
    age,
    image
  };
};

export default getUser;
