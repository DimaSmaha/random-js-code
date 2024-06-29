class Storage {
  constructor() {
    (this.defaultCity = "Los Angeles"), (this.defaultAqiFlag = "yes");
  }

  setLocalStorageValues(city, aqiFlag) {
    localStorage.setItem("city", city);
    localStorage.setItem("aqiFlag", aqiFlag);
  }

  getLocalStorageValues() {
    if (
      localStorage.getItem("city") === null ||
      localStorage.getItem("aqiFlag") === null ||
      localStorage.getItem("city") === undefined ||
      localStorage.getItem("aqiFlag") === undefined
    ) {
      localStorage.setItem("city", this.defaultCity);
      localStorage.setItem("aqiFlag", this.defaultAqiFlag);
    }

    const city = localStorage.getItem("city");
    const aqiFlag = localStorage.getItem("aqiFlag");

    return { city, aqiFlag };
  }
}

export default Storage;
