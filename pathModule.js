const path = require("path");

console.log(path.dirname("C:\Users\Admin\Documents\pro\Web Tech\Node 8hr\pathModule.js"));
console.log(path.basename("C:\Users\Admin\Documents\pro\Web Tech\Node 8hr\pathModule.js"));
console.log(path.sep);
console.log(path.extname("pathModule.js"));
const dummyPath = path.join("/content","subfolder","test.txt");
console.log(dummyPath);
console.log(path.basename(dummyPath));
console.log(path.resolve(__dirname,dummyPath));
