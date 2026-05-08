const http = require("http");
const fs = require("fs");
const server = http.createServer((req, resp) => {
    fs.readFile('html/web.html', 'utf-8', (err,data)=>{
        if(err){
            resp.write("Internal Server Error");
            resp.end();
            return;
        }
        resp.writeHead(200, {'Content-Type': 'text/html'});
        resp.write(data);
        resp.end();

    })
     
});
server.listen(5000);