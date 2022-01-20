// Reading 2 files and writing one

const fs = require("fs");

fs.readFile('../dummy/first.txt','utf-8',(err,res) =>{
    if(err){
        console.log(err);
    }
    console.log(res);
    fs.readFile('../dummy/second.txt','utf-8',(err,res) =>{
        if(err){
            console.log(err);
        }
        console.log(res);
        fs.writeFile('../dummy/third.txt','this is third text file.','utf-8',(err,res) => {
            if(err){
                console.log(err);
            }
            fs.readFile('../dummy/third.txt','utf-8',(err,res) => {
                if(err){
                    console.log(err);
                }
                console.log(res);
            });
        });
    });
});