const exporess = require('express');
const data = require('./data.js');
const server = exporess();

server.get('/', (req, res) => {
    res.send('Expressden Merhasdasdaba!');
});

server.get('/actors', (req, res) => {
    res.status(200).json(data);
});

server.get('/actors/:id', (req, res) => {
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