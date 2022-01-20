// Reading 2 files and writing one

const fs = require("fs");

fs.readFile('C:\Users\Admin\Documents\pro\Web Tech\dummy\first.txt','utf-8',(err,res) =>{
    if(err){
        console.log(err);
    }
    console.log(res);
    fs.readFile('C:\Users\Admin\Documents\pro\Web Tech\dummy\second.txt','utf-8',(err,res) =>{
        if(err){
            console.log(err);
        }
        console.log(res);
        fs.writeFile('C:\Users\Admin\Documents\pro\Web Tech\dummy\third.txt','this is third text file','utf-8',(err,res) => {
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
