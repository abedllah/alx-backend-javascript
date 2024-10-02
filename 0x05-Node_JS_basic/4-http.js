const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('Hello Holberton School!\n');

});

app.listen(port, hostname);

module.exports = app;