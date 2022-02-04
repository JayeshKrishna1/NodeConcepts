const express = require('express');
const app = express();
const logger = require('./logger.js')

app.use('/api',logger);
// the above middleware will get invoked for all routes that begins with '/api' irrespective of 404 error

app.get('/',(req,res)=>{
    res.send('home page');
});

app.get('/about',(req,res)=>{
    res.send('about page');
});

app.get('/api/products',(req,res)=>{
    res.send('products page');
});

app.get('/api/people',(req,res)=>{
    res.send('people page');
});

app.listen(5000,()=>{
    console.log('server is listening to port 5000......');
});