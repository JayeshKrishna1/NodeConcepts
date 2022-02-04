const express = require('express');
const app = express();
const {people} = require('./data.js');

app.use(express.static('./javaScriptExample'));

app.use(express.json()); // to parse the json data in req.body 

app.get('/api/people',(req,res)=>{
    res.json(people);
    // console.log(res);
});

app.post('/',(req,res)=>{
    const {name} = req.body;
    console.log(name);
    res.json(name);
});

app.listen(5000,()=>{
    console.log('server is listening to port 5000....');
})