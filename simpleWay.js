const {readFile,writeFile} = require('fs').promises

const start = async() => {
    try {
        const first = await readFile('../dummy/first.txt','utf-8');
        const second = await readFile('../dummy/second.txt','utf-8');
        await writeFile('../dummy/third.txt','this is third text file.','utf-8');
        const third = await readFile('../dummy/third.txt','utf-8');
        console.log(first);
        console.log(second);
        console.log(third);
    }
    catch(error){
        console.log(error);
    }
}

start();