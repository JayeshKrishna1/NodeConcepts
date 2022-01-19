const http = require("http");

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
    console.log("second task");
    res.write("this is for event loop server example!!!");
    res.end();
    }
});

server.listen(5000, () =>{
    console.log("server is listening to port 5000..........");
});
