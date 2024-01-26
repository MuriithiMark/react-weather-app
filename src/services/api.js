// FIXME place this in secure place, .env file
const API_KEY = "c2968e404b7188d365a90cc1a7c10780";

async function getCurrentWeatherData(cityName) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export { getCurrentWeatherData };