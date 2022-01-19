const {readFile, writeFile} =  require("fs");

console.log("start");
readFile("F:\placement.txt","utf-8",(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    writeFile("C:\placement.txt","This is placement todo list","utf-8",(err,result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("end");
    },{flag : 'a'});
});
console.log("moving to next user");
