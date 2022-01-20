const http = require('http');
const {createReadStream} = require('fs');
const fs = require('fs');

// const server = http.createServer((req,res) => {
//     const text = fs.readFileSync('../dummy/big.txt',{encoding : 'utf-8',flags : 'a'});
//     res.end(text);
// })

const server = http.createServer((req,res) => {
    const stream = createReadStream('../dummy/big.txt','utf-8');
    stream.on('open',() => {
        stream.pipe(res);
        // res.end();
    });
    stream.on('error',(error) => {
        res.end(error);
    });
});

server.listen(5000);