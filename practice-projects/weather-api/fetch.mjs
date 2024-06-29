export async function fetchData() {
  const apiKey = "0d8b0e7f340840fcb3581337242906";
  const query = "Los Angeles";
  const aqiFlag = "yes";

  const body =
    await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=${aqiFlag}
  `)
      .then((res) => res.json())
      .catch((err) => console.error(err));

  const name = body?.location?.name;
  const region = body?.location?.region;
  const localTime = body?.location?.localtime;
  const temp_c = body?.current?.temp_c;
  const temp_f = body?.current?.temp_f;
  const condition = body?.current?.condition?.text;
  const image = body?.current?.condition?.icon;
  const humidity = body?.current?.humidity;
  const windSpeed = body?.current?.wind_kph;
  const cloud = body?.current?.cloud;
  const airQualCo = body?.current?.air_quality?.co;

  console.log({
    name,
    region,
    localTime,
    temp_c,
    temp_f,
    condition,
    image,
    windSpeed,
    humidity,
    cloud,
    airQualCo,
  });

  return {
    name,
    region,
    localTime,
    temp_c,
    temp_f,
    condition,
    image,
    windSpeed,
    humidity,
    cloud,
    airQualCo,
  };
}

// {
//     "location": {
//         "name": "Los Angeles",
//         "region": "California",
//         "country": "United States of America",
//         "lat": 34.05,
//         "lon": -118.24,
//         "tz_id": "America/Los_Angeles",
//         "localtime_epoch": 1719650042,
//         "localtime": "2024-06-29 1:34"
//     },
//     "current": {
//         "last_updated_epoch": 1719649800,
//         "last_updated": "2024-06-29 01:30",
//         "temp_c": 17.8,
//         "temp_f": 64.0,
//         "is_day": 0,
//         "condition": {
//             "text": "Partly cloudy",
//             "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
//             "code": 1003
//         },
//         "wind_mph": 2.2,
//         "wind_kph": 3.6,
//         "wind_degree": 10,
//         "wind_dir": "N",
//         "pressure_mb": 1011.0,
//         "pressure_in": 29.86,
//         "precip_mm": 0.0,
//         "precip_in": 0.0,
//         "humidity": 81,
//         "cloud": 75,
//         "feelslike_c": 17.8,
//         "feelslike_f": 64.0,
//         "windchill_c": 20.4,
//         "windchill_f": 68.8,
//         "heatindex_c": 20.6,
//         "heatindex_f": 69.1,
//         "dewpoint_c": 13.0,
//         "dewpoint_f": 55.4,
//         "vis_km": 16.0,
//         "vis_miles": 9.0,
//         "uv": 1.0,
//         "gust_mph": 3.7,
//         "gust_kph": 5.9,
//         "air_quality": {
//             "co": 547.4,
//             "no2": 87.7,
//             "o3": 0.1,
//             "so2": 5.9,
//             "pm2_5": 16.7,
//             "pm10": 29.6,
//             "us-epa-index": 2,
//             "gb-defra-index": 2
//         }
//     }
// }
