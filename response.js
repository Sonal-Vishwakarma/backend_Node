const http = require('http');

const age = 25;
const name = "John Doe";
const server=http.createServer((req, resp)=>{
    resp.setHeader('Content-Type', 'text/html');
    resp.write("<h2>Welcome to Node.js and  Learning</h2>");
        resp.write(`
            <html>
            <head>
             <title>Node.js Server</title>
            </head>
            <body><h2>This is a Simple Node.js Server</h2>
            <h2>`+age+`</h2>
            <h3>name:${name}</h3>
            </body>
            </html>
            `);
    resp.end() // current response will be ended and sent to the client, but the server will continue to run and listen for new requests
    // process.exit(); // all processes will be terminated after the response is sent

})
server.listen(4800);