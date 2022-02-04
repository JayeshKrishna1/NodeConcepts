const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('Home Page');
});

app.get('/contact',(req,res)=>{
    res.status(200).send('Contact Page');
});

app.get('/about',(req,res)=>{
    res.status(200).send('About Page');
});

app.all('*',(req,res)=>{
    res.status(404).send('<h1>ERROR:404 Page Not Found</h1>');
});

app.listen(5000,()=>{
    console.log('server is listening to port 5000.....');
});
/*All these are from client side(users) */
//app.get ==> read data
//app.post ==> insert data
//app.put ==> update data
//app.delete ==> delete data
//app.all ==> for setting up 404 pages
//app.use ==> for middleware
//app.listen  ==> for port 

