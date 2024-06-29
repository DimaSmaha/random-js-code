import { fetchData } from "./fetch.mjs";
import { changeCity, paintUI } from "./ui.mjs";

const submitChangeBtn = document.getElementById("submit-change");
const cityInput = document.getElementById("city-input");
const stateInput = document.getElementById("state-input");

submitChangeBtn.addEventListener("click", () => {
  changeCity();
});

cityInput.addEventListener("focus", () => {
  cityInput.classList.remove("is-invalid");
});

stateInput.addEventListener("focus", () => {
  stateInput.classList.remove("is-invalid");
});

async function fetchTheData() {
  await fetchData().then((resp) => paintUI(resp));
}

document.addEventListener("DOMContentLoaded", await fetchTheData());
