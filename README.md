# React Weather App

## Preview

#### Default Preview -> Nyeri Town
![Default Preview](https://github.com/MuriithiMark/react-weather-app/blob/main/default-preview.png)

#### Search Preview -> Dubai City
![Dubai Search Preview](https://github.com/MuriithiMark/react-weather-app/blob/main/dubai-preview.png)


## Challenges
#### CORS Error
By passing the CORS error when accessing the openweather api was a hassle
As a solution, I made a simple express server in the `server` folder
It takes the url I wish to access as a parameter and then returns the json result;

This only works for apis/urls returning json data.
The server should be started before running the app
```bash
pnpm run no-cors-server
```

This error is a non-issue, calling the correct openweather api resolves it.
ENSURE THAT URLS to API are correct as provided in respective documentations

#### Folder Structure
In this project, I attempted to try out a different folder structure. That is creating a folder for each component to hold and `index.jsx` and `Component.css`.

This structure leads to many folders, however it is easier to style a single component as its css resides beside it.