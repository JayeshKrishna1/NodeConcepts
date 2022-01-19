const { Console } = require("console");
const os = require("os");

const user = os.userInfo();
console.log(user);

console.log(`the system uptime is ${os.uptime} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    version : os.version(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
};
console.log(currentOS);