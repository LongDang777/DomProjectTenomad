const container = document.querySelector(".container");
const loading = document.querySelector(".loading");


const fetUser = async (url) => {
  container.style.opacity= '0';
  loading.style.display= 'block';
  try {
    const res = await fetch(url)
    const data = await res.json();
    return data
  } catch (error) {
    console.log('loi api==>', error);
  }
}


export default fetUser

