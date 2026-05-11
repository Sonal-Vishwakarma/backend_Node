const http = require("http");
const arg = process.argv;
const port = arg[2];
// console.log("................", arg);n

const server =http.createServer((req, resp)=>{
    resp.write("<h1>This is My Home Pagess</h1>");
    resp.end("Hello World");
})
server.listen(port);