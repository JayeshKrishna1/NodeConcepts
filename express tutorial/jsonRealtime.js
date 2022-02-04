const express = require('express');
const {products,people} = require('./data.js');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>this is a home page</h1><a href="/api/students">Students</a><a href="/api/products">Products</a><a href="/api/people">People</a>');
})


app.get('/api/students',(req,res)=>{
    res.json([{name : 'Jayesh', password : 123},{name : 'Krishna', password : 456}]);
});

app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.get('/api/people',(req,res)=>{
    res.json(people);
});

app.listen(5000,()=>{
    console.log('server is listening to port 5000....');
});