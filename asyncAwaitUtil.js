const {readFile,writeFile} = require('fs');

const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFilePromise('../dummy/first.txt','utf-8');
        const second = await readFilePromise('../dummy/second.txt','utf-8');
        await writeFilePromise('../dummy/third.txt','this is third text file.','utf-8');
        const third = await readFilePromise('../dummy/third.txt','utf-8');
        console.log(first);
        console.log(second);
        console.log(third);
    }
    catch(error){
        console.log(error);
    }
}

start();