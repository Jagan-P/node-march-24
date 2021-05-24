const fs = require('fs');

// let readStream = fs.createReadStream('sowpods.txt','utf-8');
// let writeStream = fs.createWriteStream('sowpods-new.txt');

// readStream.on("data",function(chunk) {
//     // console.log("printing chunk");
//     // console.log(chunk);

//     writeStream.write(chunk);
// })

// let string = '';

// for(let i=0; i<100000; i++) {
//     string+=i+"\n";
// }

// fs.writeFileSync('numbers.txt', string);

// let readStream = fs.createReadStream('numbers.txt', 'utf-8');
// let writeStream = fs.createWriteStream('numbersMultipliedBy2.txt');

// readStream.on('data', function(chunk) {
//     chunk = chunk.split('\n').map((value)=>{
//         return (parseInt(value)*2).toString()
//     }).join("\n");

//     writeStream.write(chunk);
// });

let readStream = fs.createReadStream('numbers.txt', 'utf-8');
let writeStream = fs.createWriteStream('numbers-copy.txt');

readStream.pipe(writeStream);