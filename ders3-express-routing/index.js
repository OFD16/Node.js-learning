const express = require('express');
const actorsRouter = require("./routers/actorsRouter");
const server = express();

server.use(express.json()); //gelen bütün istekleri json formatında dönderir gibi bir şey
server.use("/actors", actorsRouter);

server.get('/', (req, res) => {
    res.send('Expressden Merhabalar!');
});

server.listen(5000, () => {
    console.log('http://localhost:5000 adresine gelen istekler dinleniyor');
});