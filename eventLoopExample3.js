console.log("starting first task");

setInterval(() =>{
    console.log("starting second task");
    console.log("we are in timeout callback function now!!!");
    console.log("task completed");
},2000)

console.log("strating third task");