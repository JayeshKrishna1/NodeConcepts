const {createReadStream} = require('fs');
const fs = require('fs');

for(let i =0;i<10000;i++){
    fs.writeFileSync('../dummy/big.txt',`hello jayesh ${i}`,{encoding : 'utf-8',flag : 'a'});
}
const stream = createReadStream('../dummy/big.txt',{encoding : 'utf-8',highWaterMark : 100000});

stream.on('data',(res) => {
    console.log(res);
})
stream.on('error',(error) => {
    console.log(error);
})