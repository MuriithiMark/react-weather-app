const OPEN_WEATHER_API_KEY = "c2968e404b7188d365a90cc1a7c10780";
const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";

async function getCoordinatesOfCity(cityName) {
    const limit = 1;
    const geolocationUrl = `http://api.openweathermap.org/geo/1.0/direct?` +
        `q=${cityName}` +
        `&limit=${limit}` +
        `&appid=${OPEN_WEATHER_API_KEY}`;

    const response = await fetch(geolocationUrl);
    if (!response.ok || response.status !== 200) {
        console.error(`Error fetching geolocation data: `, response);
        return [];
    }
    const geoLocationData = await response.json();

    if(geoLocationData.length === 0) {
        return [];
    }

    const [{ lat, lon }] = geoLocationData;
    return [lat, lon];
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
    const partToBeExcluded = 'minutely,hourly,alerts';
    const currentWeatherDataUrl = `http://api.openweathermap.org/data/2.5/onecall?` +
        `lat=${lat}&lon=${lon}` +
        `&exclude=${partToBeExcluded}` +
        `&appid=${OPEN_WEATHER_API_KEY}`;

    const response = await fetch(currentWeatherDataUrl, { mode: 'cors' });
    if (!response.ok || response.status !== 200) {
        console.error(`Error retrieving current weather data: `, response)
        throw new Error(`{
            status: 'fail',
            message: response.statusText,
        }`)
    }
    const currentWeatherData = await response.json();
    console.log(currentWeatherData)
    // TODO only place required objects in currentWeatherData
    return currentWeatherData;
}


export { getCurrentWeatherData }