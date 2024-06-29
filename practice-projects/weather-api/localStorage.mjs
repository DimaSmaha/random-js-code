let defaultCity = "Los Angeles";
let defaultAqiFlag = "yes";

export function setLocalStorageValues(query, aqiFlag) {
  localStorage.setItem("city", query);
  localStorage.setItem("aqiFlag", aqiFlag);
}

export function getLocalStorageValues() {
  const city = localStorage.getItem("city");
  const aqiFlag = localStorage.getItem("aqiFlag");

  return { city, aqiFlag };
}
