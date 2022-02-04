const http = require('http');

const fs = require('fs');

const todoListhtml = fs.readFileSync('./ToDo List/index.html');
const todoListcss = fs.readFileSync('./ToDo List/style.css');
const todoListjs = fs.readFileSync('./ToDo List/todo.js');

const server = http.createServer((req,res)=> {
    console.log(req.url);
    if(req.url === '/'){
        // console.log(req);
        console.log('the user hits the server');
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write('<h1>This is Home page!!!</h1>');
        res.end();
    }
    else if(req.url === '/todo'){
        console.log(req.method);
        console.log(req.url);
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(todoListhtml);
        res.end();
    }
    else if(req.url === '/style.css'){
        console.log(req.method);
        console.log(req.url);
        res.writeHead(200,{'content-type' : 'text/css'});
        res.write(todoListcss);
        res.end();
    }
    else if(req.url === '/todo.js'){
        console.log(req.method);
        console.log(req.url);
        res.writeHead(200,{'content-type' : 'text/javascript'});
        res.write(todoListjs);
        res.end();
    }
    else{
        res.writeHead(404,{'content-type' : 'text/plain'});
        res.end('No resource found');
    }
});

server.listen(5000,()=>{
console.log('server is listening to port 5000');
});