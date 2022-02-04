const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));// middleware and static setup 
// we passing the public folder for all get req statically which means the the files in the folder wont change
// we can also send dynamically and that is using server side rendering(ssr)
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./ToDo List/index.html'));
})

app.all('*',(req,res)=>{
    res.status(404).send('Page not found');
});

app.listen(5000,()=>{
    console.log('server is listening to port 5000......');
});