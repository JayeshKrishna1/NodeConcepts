const express = require('express');
const app = express();
const {people} = require('./data.js')

app.use(express.static('./formExample'));
//to parse the data with the url
app.use(express.urlencoded({extended : false}));


app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
       return res.send(`welcome ${name}`);
    }
    res.send('pls provide data');
});


app.listen(5000,()=>{
    console.log('server is listening to port 5000.....');
})