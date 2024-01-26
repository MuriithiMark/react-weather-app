# React Weather App

## Preview

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

#### Folder Structure
In this project, I attempted to try out a different folder structure. That is creating a folder for each component to hold and `index.jsx` and `Component.css`.

This structure leads to many folders, however it is easier to style a single component as its css resides beside it.