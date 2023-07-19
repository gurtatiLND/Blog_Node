const fs = require('fs');

const readStream = fs.createReadStream('./blog.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./blog2.txt');

// //first way how to write from readable stream:
// // .on - is an event listener, but in this time we are listening a data event on this readStream
// readStream.on('data', (chunk) => {
//    console.log('----- NEW CHUNK -----');
//    console.log(chunk);
//    writeStream.write('\nNEW CHUNK\n');
//    writeStream.write(chunk);
// });

// the second way:
// piping - everytime when we read something in readable stream we are passing it to writable stream:
readStream.pipe(writeStream);