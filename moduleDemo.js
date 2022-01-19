// receving the exported modules

const messageFunction = require("./functionModDemo"); // when it receives the js control goes to the module and runs the code in that module 
const names = require("./variableModDemo");

// the received modules are stored in the children property of this module object which is of array type
// to check do console.log(module.children);

console.log(messageFunction);
console.log(names);


messageFunction(names.firstName);
messageFunction(names.lastName);

// console.log(module);
