const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json([{name : 'Jayesh', password : 123},{name : 'Krishna', password : 456}]);
});


app.listen(5000,()=>{
    console.log('server is listening to port 5000....');
});