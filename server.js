const http = require('http');
http.createServer((req, resp)=>{
    // resp.write("Welcome to Node.js");
      resp.write("<h1>Welcome to Node.js</h1>");
    resp.end("hello....................................");
}).listen(4800);



http.createServer((res, resp)=>{
  resp.write("<h1>Welcome to Node.js brbabbj</h1>");
  // resp.end("Welcome to Node.jsfjj");
}).listen(5900);