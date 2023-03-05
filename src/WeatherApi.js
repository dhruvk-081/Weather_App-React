const API_KEY = "f38c69f0c94db265131bf231f7446868";

const iconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const WeatherApi = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    coord: { lon, lat },
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed, deg },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];
  return {
    description,
    iconImage: iconURL(icon),
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    deg,
    country,
    name,
  };
};

export { WeatherApi };
