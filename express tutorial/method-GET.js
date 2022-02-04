const express = require('express');
const app = express();
const {people} = require('./data.js')


//get method(default)
app.get('/',(req,res)=>{
    res.status(200).json({success : 'true' , data : people});
});


app.listen(5000,()=>{
    console.log('server is listening to port 5000.....');
})