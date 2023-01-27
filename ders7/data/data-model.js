const db = require('./db-config');

module.exports = {
    getActors,
}

function getActors(){
    return db('actor');  // db.select('actor'); same
}