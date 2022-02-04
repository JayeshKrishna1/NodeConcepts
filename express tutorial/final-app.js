const express = require('express');
const app = express();

const people = require('./routes/people.js');
const base = require('./routes/base.js');

app.use(express.static('./javaScriptExample'));

app.use(express.json());

app.use('/api/people',people);

app.use('/',base);

app.listen(5000,()=>{
    console.log('server is listening to port 5000....');
});