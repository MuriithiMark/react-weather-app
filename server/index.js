const express = require("express");
const cors = require("cors");

const app = express();
const port = 8001;
const corsOptions = {
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}

app.use(cors(corsOptions));

app.get('/:url', (req, res) => {
    const url = req.params.url;
    fetch(url)
        .then((response) => response.json())
        .then((data) => res.json(data))

        .catch((error) => {
            // TODO Fix this error code is incorrect
            res.statusCode = 404
            res.send(error)
        })
});

app.listen(port, () => {
    console.info(`[CORS-bypass-server] running at http://localhost:${port}`)
})