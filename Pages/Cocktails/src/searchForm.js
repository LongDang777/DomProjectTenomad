import { apiSearch } from "../utils/api.js";
import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const form = get(".search-form");
const input = get('[name="drink"]');

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${apiSearch}${value}`);
});
