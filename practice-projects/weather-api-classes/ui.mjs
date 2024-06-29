import Storage from "./localStorage.mjs";

const storage = new Storage();

class UI {
  changeCity() {
    const cityInput = document.getElementById("city-input");
    const airQualityInput = document.getElementById("airQuality-input");

    if (cityInput.value == "" || airQualityInput.value == "") {
      cityInput.classList.add("is-invalid");
      airQualityInput.classList.add("is-invalid");
    }
    storage.setLocalStorageValues(cityInput.value, airQualityInput.value);
  }

  hideModal() {
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    );
    modal.hide();
  }

  paintUI(data) {
    const location = document.getElementById("location");
    const description = document.getElementById("description");
    const descriptionTwo = document.getElementById("string");
    const weatherImg = document.getElementById("weather-icon");
    const humidity = document.getElementById("d-humidity");
    const wind = document.getElementById("d-wind");
    const cloud = document.getElementById("d-cloud");
    const airQualCo = document.getElementById("d-airqual");

    location.innerText = `${data.name}, ${data.region}`;
    description.innerText = `${data.localTime}`;
    descriptionTwo.innerText = `C ${data.temp_c}° (F ${data.temp_f}°) ${data.condition}`;
    weatherImg.setAttribute("src", data.image);
    humidity.innerText = `Humidity level: ${data.humidity}%`;
    wind.innerText = `Wind speed: ${data.windSpeed} km/h`;
    cloud.innerText = `Cloudness: ${data.cloud}%`;
    airQualCo.innerText =
      data.airQualCo !== undefined
        ? `CO2 Level: ${data.airQualCo} ppm`
        : "You have not selected air quality info";
  }
}

export default UI;
