import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";
import { ApiMain } from "./utils/api.js";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(ApiMain);
});

