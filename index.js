// console.log("Hello world");
// console.log(1+2);
// if(false) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }

const fs = require("fs");
const testFile = require('./test.js');

fs.readFile('content.txt',(err, data)=>{
    if(err) {
        throw new Error("unable to read file");
    }
    else {
        console.log(data.toString());
        // console.log(data.toString());
    }
})

testFile.printToConsole("Some data to be printed");

// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 1000);
// console.log("third");