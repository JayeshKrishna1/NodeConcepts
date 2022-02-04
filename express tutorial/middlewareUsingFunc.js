const express = require('express');
const app = express();

// if we want to add the functionality to every rout we can add in the function

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getTime();
    console.log(method,url,time);
    next(); // important : it specifies where the control to go after executing the middleware
 
}
app.get('/',logger,(req,res)=>{
    res.send('home page');
});

app.get('/about',logger,(req,res)=>{
    res.send('about page');
});
app.listen(5000,()=>{
    console.log('server is listening to port 5000......');
});