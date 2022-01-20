const fs = require("fs");
const path = require("path");

const readFiles = (path) =>{
    return new Promise((resolve,reject) => {
        fs.readFile(path,'utf-8',(err,res) =>{
            if(err){
                reject(err);
            }
            resolve(res);
        });
    });
};


const writeFiles = (path) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(path,'this is third file.','utf-8',(err,res) => {
            if(err){
                reject(err);
            }
            resolve(path);
        });
    });
};


readFiles('../dummy/first.txt')
.then((res) => console.log(res))
.catch((err) => console.log(err));

readFiles('../dummy/second.txt')
.then((res) => console.log(res))
.catch((err) => console.log(err));

writeFiles('../dummy/third.txt')
.then((path) => { readFiles(path)
.then((resolve) => console.log(resolve))
.catch((error) => console.log(error))})
.catch((err) => console.log(err));