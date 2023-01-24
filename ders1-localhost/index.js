const http = require('http');

const host = '192.168.1.181';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; // the request was successful
    res.setHeader('Content-Type', 'text/plain');
    res.end('R31313131313');
});

server.listen(port, host, () => {
    console.log(`http://${host}:${port} adresinden gelen istekler dinleniyor...`);
});