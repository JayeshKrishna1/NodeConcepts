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

const start = async() =>{
    try {
        const first = await readFiles('../dummy/first.txt');
        const second = await readFiles('../dummy/second.txt');
        const pathWrite = await writeFiles('../dummy/third.txt');
        const third = await readFiles(pathWrite);
        console.log(first);
        console.log(second);
        console.log(third);
    } catch (error) {
        console.log(error);
    }
};

// const startWrite = async() =>{
//     try{
//         const pathWrite = await writeFiles('../dummy/third.txt');
//         const third = await readFiles(pathWrite);
//         console.log(third);
//     }
//     catch(err){
//         console.log(err);
//     }
// };
start();
// startWrite();