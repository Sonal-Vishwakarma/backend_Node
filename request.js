const http = require("http");

http
  .createServer((req, resp) => {
    console.log(req);
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

    if (req.url == "/") {
      resp.write("<h1>This is My Home Page</h1>");
    } else if (req.url == "/login") {
      resp.write("<h1>This is My Login Page</h1>");
    } else {
      resp.write("<h1>Other Page</h1>");
    }
    resp.end("Hello World");
  })
  .listen(5800);
