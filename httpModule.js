const http = require("http");

const server = http.createServer((req,res) =>{
    if(req.url === "/"){
        res.write("hey this is from node!!!");
        res.end();
    }
    else if(req.url === "/about"){
        res.write("this is about page and this is from node");
        res.end();
    }
    else{
        res.write(`<h1>OOPS!!!!!</h1> <a href = "/">back</a>`);
        res.end();
    }
});

server.listen(5000);