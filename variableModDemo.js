const secret = "Kannan";

const firstName = "Jayesh";
const lastName = "Krishna";

//exporting this module
module.exports = {firstName,lastName};

// alternative way
module.exports.details = {
    fatherName : "kannan",
    mothername : "latha",
    sister : {
        sisterName : "suba"
    }
}


console.log(module);

// console.log(`this is ${__filename}`);
