const http = require('http');
http.createServer((req, resp)=>{
    // resp.write("Welcome to Node.js");
      resp.write("<h1>Welcome to Node.js</h1>");
    resp.end("hello");
}).listen(4800);