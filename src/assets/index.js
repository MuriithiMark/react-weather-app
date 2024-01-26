import cloudyMoon from "./images/cloudy_moon.svg"
import cloudyThunder from "./images/cloudy-thunder.svg"
import cloudy from "./images/cloudy.svg";
import foggy from "./images/foggy.svg"
import heavyCloudsSun from "./images/heavy-clouds-sun.svg"
import heavyRain from "./images/heavy-rain.svg"
import heavyRainsLightning from "./images/heavy-rains-lightning.svg"
import lightCloudsSun from "./images/light-clouds-sun.svg"
import lightRain from "./images/light-rain.svg";
import loadingGif from "./images/loading.gif";
import sun from "./images/sun.svg";

export {
    cloudyMoon,
    cloudyThunder,
    cloudy,
    foggy,
    heavyCloudsSun,
    heavyRain,
    heavyRainsLightning,
    lightCloudsSun,
    lightRain,
    loadingGif,
    sun,
}

const WeatherIcons = new Map();

WeatherIcons.set("01d", sun);
WeatherIcons.set("01d", sun);

WeatherIcons.set("02d", lightCloudsSun);
WeatherIcons.set("02n", lightCloudsSun);

WeatherIcons.set("03d", heavyCloudsSun);
WeatherIcons.set("03n", heavyCloudsSun);

WeatherIcons.set("04d", cloudy);
WeatherIcons.set("04n", cloudy);

WeatherIcons.set("09d", lightRain);
WeatherIcons.set("09n", lightRain);

WeatherIcons.set("10d", heavyRain);
WeatherIcons.set("10n", heavyRain);

WeatherIcons.set("11d", heavyRainsLightning);
WeatherIcons.set("11n", heavyRainsLightning);

WeatherIcons.set("13d", cloudyThunder);
WeatherIcons.set("13n", cloudyThunder);

WeatherIcons.set("50d", foggy);
WeatherIcons.set("50n", foggy);

WeatherIcons.set("cloudy_moon", cloudyMoon);

export default WeatherIcons;


// export default const WeatherIcons =  {
//     '': cloudyMoon,
//     '': cloudyThunder,
//     '': cloudy,
//     '': foggy,
//     '': heavyCloudsSun,
//     '': heavyRain,
//     '': heavyRainsLightning,
//     '': lightCloudsSun,
//     '': lightRain,
//     loadingGif,
//     sun,
// }