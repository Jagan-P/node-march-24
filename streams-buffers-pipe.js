const fs = require('fs');

let readStream = fs.createReadStream('sowpods.txt','utf-8');

readStream.on("data",function(chunk) {
    console.log("printing chunk");
    console.log(chunk);
})