const express = require('express');
const app = express();
const {people} = require('./data.js');

app.use(express.static('./javaScriptExample'));

app.use(express.json());

app.get('/api/people',(req,res)=>{
    res.json(people);
    // console.log(res);
});

app.post('/',(req,res)=>{
    const {name} = req.body;
    console.log(name);
    res.json(name);
});

app.put('/api/people/:id',(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    const {id} = req.params;
    const {name} = req.body;

    const idCheck = people.find((eachPeople) =>{
        return eachPeople.id === Number(id);
        // console.log(eachPeople);
    });
    console.log(idCheck);
    if(!idCheck){
        return res.status(404).json({success : 'true', data : `No data foundd in ${id}`});
    }
    const newPeople = people.map((eachObj)=>{
        if(eachObj.id === Number(id)){
            eachObj.name = name;
        }
        return eachObj;
    });
    console.log(newPeople);
    res.json({success : true ,data : newPeople});
})

app.delete('/api/people/:id',(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const idCheck = people.find((eachObj)=> eachObj.id === Number(id));
    if(!idCheck){
        return res.status(404).json({success : 'true', data : `cant find any data with ${id}`});
    }
    const newPeople = people.filter((eachObj)=>{
        return eachObj.id !== Number(id);
    });
    res.json({success : 'true', data : newPeople});
})
app.listen(5000,()=>{
    console.log('server is listening to port 5000....');
});