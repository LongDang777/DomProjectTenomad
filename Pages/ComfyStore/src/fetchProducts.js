import { allProductsUrl } from "./utils.js"

const fetProducts = async ()=>{
  const res = await fetch(allProductsUrl);
  const data = await res.json();
  return data;
}

export default fetProducts;