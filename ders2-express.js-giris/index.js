const express = require('express');
const data = require('./data.js');
const server = express();

server.use(express.json()); //gelen bütün istekleri json formatında dönderir gibi bir şey

server.get('/', (req, res) => {
    res.send('Expressden Merhabalar!');
});

server.get('/actors', (req, res) => {
    res.status(200).json(data);
});

// server.get('/actors/:id', (req, res) => {
//     const {id} = req.params;
//     const actor = data.find( (actor) => actor.id === parseInt(id));

//     if(actor){
//         res.status(200).json(actor);
//     }else{
//         res.status(404).send("There is no result with you want to reach:...");
//     }
// });

// server.get('/actors/:id', (req, res) => {
//     console.log("req.query", req.query);
//     const {id} = req.params;
//     const actor = data.find( (actor) => actor.id === parseInt(id));

//     if(actor){
//         res.status(200).json(actor);
//     }else{
//         res.status(404).send("There is no result with you want to reach:...");
//     }
// });

server.get('/actors/:id', (req, res) => {
    console.log("req.body", req.body);
    const {id} = req.params;
    const actor = data.find( (actor) => actor.id === parseInt(id));

    if(actor){
        res.status(200).json(actor);
    }else{
        res.status(404).send("There is no result with you want to reach:...");
    }
});

server.listen(5000, () => {
    console.log('http://localhost:5000 adresine gelen istekler dinleniyor');
});