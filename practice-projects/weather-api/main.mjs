import { fetchData } from "./fetch.mjs";
import { getLocalStorageValues } from "./localStorage.mjs";
import { changeCity, paintUI } from "./ui.mjs";

const submitChangeBtn = document.getElementById("submit-change");
const cityInput = document.getElementById("city-input");
const airQualityFlag = document.getElementById("airQuality-input");

submitChangeBtn.addEventListener("click", async () => {
  changeCity();
  await fetchTheData();
});

cityInput.addEventListener("focus", () => {
  cityInput.classList.remove("is-invalid");
});

airQualityFlag.addEventListener("focus", () => {
  airQualityFlag.classList.remove("is-invalid");
});

async function fetchTheData() {
  let currentCity = getLocalStorageValues();
  await fetchData(currentCity.city, currentCity.aqiFlag).then((resp) =>
    paintUI(resp)
  );
}

document.addEventListener("DOMContentLoaded", await fetchTheData());
