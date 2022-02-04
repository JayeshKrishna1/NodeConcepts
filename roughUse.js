// const people = [{
//     id : 1,name : 'john'
// },{
//     id : 2,name : 'peter'
// },{
//     id : 3,name : 'susan'
// },{
//     id : 4,name : 'micheal'
// }];

// const idCheck = people.find((eachobj)=>{
//     return eachobj.id === 1;
// })
// console.log(idCheck);
const express = require('express');
const app = express();
const {people} = require('./data.js');

app.use('/api/people',express.static('./javaScriptExample'));

app.use(express.json()); // to parse the json data in req.body 

app.get('/api/people',(req,res)=>{
    res.json(people);
    // console.log(res);
});

app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    console.log(name);
    res.json(name);
});

app.listen(5000,()=>{
    console.log('server is listening to port 5000....');
})