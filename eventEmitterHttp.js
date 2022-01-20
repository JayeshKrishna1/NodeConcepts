const http = require('http');

const server = http.createServer();

server.on('request',(req,res) =>{
    res.end('welcome');
})

// server.emit('request'); it happens behind the scene

server.listen(5000);