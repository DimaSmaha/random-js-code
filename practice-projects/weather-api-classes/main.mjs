import Weather from "./fetch.mjs";
import Storage from "./localStorage.mjs";
import UI from "./ui.mjs";

const submitChangeBtn = document.getElementById("submit-change");
const cityInput = document.getElementById("city-input");
const airQualityFlag = document.getElementById("airQuality-input");

const storage = new Storage();
const weather = new Weather();
const ui = new UI();

async function fetchTheData() {
  let currentCity = storage.getLocalStorageValues();
  await weather
    .fetchData(currentCity.city, currentCity.aqiFlag)
    .then((resp) => ui.paintUI(resp));
}

document.addEventListener("DOMContentLoaded", await fetchTheData());

submitChangeBtn.addEventListener("click", async () => {
  ui.changeCity();
  await fetchTheData();
  ui.hideModal();
});

cityInput.addEventListener("focus", () => {
  cityInput.classList.remove("is-invalid");
});

airQualityFlag.addEventListener("focus", () => {
  airQualityFlag.classList.remove("is-invalid");
});
