const express = require('express');
const app = express();
const path = require('path');

// added index.html to public folder. Still servers the same as before and more simple
app.use(express.static('./public'));

app.all('*',(req,res)=>{
    res.status(404).send('Page not found');
});

app.listen(5000,()=>{
    console.log('server is listening to port 5000......');
});