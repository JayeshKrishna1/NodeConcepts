const fs = require('fs');

console.log("starting the task");

fs.readFile('../dummy/first.txt','utf-8',(err,res) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
    console.log("task completed");
});

console.log("ending the task");