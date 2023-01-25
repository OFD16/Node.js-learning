const express = require('express');
const actorsRouter = require("./routers/actorsRouter");
const logger = require('./middlewares/logger.js');
const errorHandling = require('./middlewares/errorHandling.js');

const server = express();

server.use(express.json()); //gelen bütün istekleri json formatında dönderir gibi bir şey
server.use("/actors", actorsRouter);
server.use(logger);

server.get('/', (req, res) => {
    res.send('Expressden Merhabalar!');
});

server.use(errorHandling); //sonda çağrılırki ilk hatayı alması için
server.listen(5000, () => {
    console.log('http://localhost:5000 adresine gelen istekler dinleniyor');
});