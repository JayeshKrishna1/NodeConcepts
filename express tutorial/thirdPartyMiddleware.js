const express = require('express');
const app = express();
const logger = require('./logger.js');
const authorize = require('./authorize.js');
const morgan = require('morgan');

// app.use('/api',[logger,authorize]);
// the above middleware will get invoked for all routes that begins with '/api' irrespective of 404 error
//we can also use third party middleware

app.use(morgan('tiny'));//basic one that gives the essential details
app.get('/',(req,res)=>{
    res.send('home page');
});

app.get('/about',(req,res)=>{
    res.send('about page');
});

app.get('/api/products',(req,res)=>{
    // console.log(req.client);
    // res.send(req.client);
    res.send('products page');
});

app.get('/api/people',(req,res)=>{
    res.send('people page');
});

app.listen(5000,()=>{
    console.log('server is listening to port 5000......');
});