const express = require("express");
const cors = require("cors");

const app = express();
const port = 8001;
const corsOptions = {
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}

app.use(cors(corsOptions));

app.get('*', (req, res) => {
    const url = req.url.replace('/', '');
    console.info('[Request Url]: ', url)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            res.json(data)
        })
});

app.listen(port, () => {
    console.info(`[CORS-bypass-server] running at http://localhost:${port}`)
})