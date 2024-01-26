const OPEN_WEATHER_API_KEY = "ce87a2c798575dee6dc896329fd276a8";
const CORS_ANYWHERE_URL = "http://localhost:8001/";

/**
 * 
 * @param {string} cityName 
 * @returns {[lat: number, lon: number]}
 */
async function getCoordinatesOfCity(cityName) {
    const limit = 1;
    const geolocationUrl = `${CORS_ANYWHERE_URL}http://api.openweathermap.org/geo/1.0/direct?` +
        `q=${cityName}` +
        `&limit=${limit}` +
        `&appid=${OPEN_WEATHER_API_KEY}`;

    const response = await fetch(geolocationUrl);
    console.log(response);

    if (!response.ok || response.status !== 200) {
        console.error(`Error fetching geolocation data: `, response);
        return [];
    }
    const geoLocationData = await response.json();

    if (geoLocationData.length === 0) {
        return [];
    }

    const [{ lat, lon }] = geoLocationData;
    return [lat, lon];
}

/**
 * 
 * @param {number} lat 
 * @param {number} lon 
 * @returns 
 */
async function getSeveralDaysOfForecast(lat, lon) {
    // Several Days of Forecast
    const severalDaysOfForecast =
        `https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${lat}` +
        `&lon=${lon}` +
        `&appid=${OPEN_WEATHER_API_KEY}`;
    const response = await fetch(severalDaysOfForecast);
    if (!response.ok || response.status !== 200) {
        console.error(`Error retrieving several days of weather forecast `, response);
        throw new Error("[SeveralDaysOfForecast] ", "invalid response")
    }
    console.log(response)
    const severalDaysOfForecastData = await response.json();
    console.log(severalDaysOfForecast)
    return severalDaysOfForecast;
}


/**
 * 
 * @param {string} cityName 
 * @returns 
 */
async function getCurrentWeatherData(cityName) {
    const coordinates = await getCoordinatesOfCity(cityName);
    if (coordinates.length === 0) {
        console.error('No such city found')
        throw new Error(`{
            status: 'fail',
            message: 'No such city found',
        }`)
    }
    const [lat, lon] = coordinates;

    const currentWeatherDataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`

    const response = await fetch(currentWeatherDataUrl, { mode: 'cors' });
    if (!response.ok || response.status !== 200) {
        console.error(`Error retrieving current weather data: `, response)
        throw new Error(`{
            status: 'fail',
            message: response.statusText,
        }`)
    }
    const currentWeatherData = await response.json();
    const severalDaysOfForecast = await getSeveralDaysOfForecast(lat, lon);


    // TODO only place required objects in currentWeatherData
    return {
        currentWeatherData,
        severalDaysOfForecast
    };
}

export { getCurrentWeatherData }