const express = require("express");
const cors = require("cors");

const app = express();
const port = 8001;
const corsOptions = {
    origin: '*',
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
            res.setHeader('Access-Control-Allow-Origin', 'localhost:5173');
            res.json(data)
        })

        .catch((error) => {
            res.statusCode = 401
            res.statusMessage = `Invalid Response from  ${url}`
            res.json({
                status: 'fail',
                message: `Invalid response from ${url}`,
                hint: "Ensure that a json response is returned from the given url"
            })
        })
});

app.listen(port, () => {
    console.info(`[CORS-bypass-server] running at http://localhost:${port}`)
})