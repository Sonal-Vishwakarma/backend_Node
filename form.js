// const http = require('http');

// http.createServer((req, resp)=>{
//     resp.writeHead(200, {'Content-Type': 'text/html'});
//     console.log(req);

//     if(req.url == "/"){
//         resp.write(`
//         <form action="/submit" method="POST">
//         <input type="text" name="name" placeholder="Enter your name">
//         <input type="email" name="email" placeholder="Enter your email">
//         <button type="submit">Submit</button>
//         </form>`);
//     }
//     else if(req.url == "/submit"){
//         resp.write("Form submitted successfully!");
//     }

//     resp.end();
// }).listen(3200);

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, resp)=>{
//    fs.readFile('html/form.html', 'utf-8',(error, data)=>{

//     if(error){
//         resp.writeHead(200, {'Content-Type': 'text/html'});
//         resp.end("Internal Server Error");
//         return;
//     }
//          resp.writeHead(200, {'Content-Type': 'text/html'});
//     if(req.url == "/"){
//        resp.write(data);
//     }
//     else if(req.url == "/submit"){

//         resp.write("Form submitted successfully!");
//     }
//          resp.end();

//    })

// })
// .listen(3400);

// practice form handling in node js

const http = require("http");

const fs = require("fs");
http.createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "Content-Type": "text/html" });
        resp.write("Internal Server Error");
        resp.end();
        return;
      }

      if (req.url == "/") {
         resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(data);
      } else if (req.url == "/submit") {
        resp.write("<h1>Form submitted successfully!</h1>");
      }

      resp.end();
    });
  })
  .listen(5600);
