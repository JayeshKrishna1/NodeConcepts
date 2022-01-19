const fs = require("fs");
console.log("start");
const readFile = fs.readFileSync("F:\placement.txt","utf-8");
console.log(readFile);

const writeFile = fs.writeFileSync("F:\placement.txt","this is placement todoList","utf-8",{flag : 'a'});
// console.log(writeFile);
console.log("end");
console.log("moving to next user");