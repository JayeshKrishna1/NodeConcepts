const express = require('express');
const app = express();

// req => middleware => res

app.get('/',(req,res)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getTime();
    console.log(method,url,time);
    // the above codes are middleware which gets invoked everytime when user hits the server at home router
    res.send('home page');
});

app.get('/about',(req,res)=>{
    res.send('about page');
});
app.listen(5000,()=>{
    console.log('server is listening to port 5000......');
});