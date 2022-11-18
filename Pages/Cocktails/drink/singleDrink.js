import fetchDrinks from "../src/fetchDrinks.js";
import { apiItemDrink } from "../utils/api.js";
import displaySingleDrink from "./displaySingleDrink.js";

const presentDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    window.location.replace("../cocktails.html");
  } else {
    const drink = await fetchDrinks(apiItemDrink(id));
    displaySingleDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);
