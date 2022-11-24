const title = document.querySelector(".section-title h1");

const fetUser = async (url) => {
  title.textContent = "pagination";
  try {
    const res = await fetch(url)
    const data = await res.json();
    return data
  } catch (error) {
    console.log('loi api==>', error);
  }
}


export default fetUser

