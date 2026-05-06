// const fs = require('fs');
// const os = require('os');

const {log,warn} =require('console');


// fs.writeFileSync("dummy.txt", "This is dummy file created using Node.js");

// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.cpus());

//Global Object

console.log("abc");
console.log(process.cwd());
console.log(process.pid);

log("This is Modules.js file");
warn("This is warning message");