const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, resp) => {

    // Home Page
    if (req.url == "/") {

        fs.readFile('html/form2.html', 'utf-8', (error, data) => {

            if (error) {
                resp.writeHead(500, { 'Content-Type': 'text/html' });
                resp.write("Internal Server Error");
                resp.end();
                return;
            }

            resp.writeHead(200, { 'Content-Type': 'text/html' });

            resp.write(data);

            resp.end();
        });

    }

    // Submit Form
    else if (req.url == "/submit" && req.method == "POST") {

        let dataBody = [];

        req.on("data", (chunk) => {
            dataBody.push(chunk);
        });

        req.on("end", () => {

            let rawData = Buffer.concat(dataBody).toString();

            let readableData = querystring.parse(rawData);

            console.log(readableData);

            // Read Success HTML File
            fs.readFile('html/form2res.html', 'utf-8', (error, successData) => {

                if (error) {
                    resp.writeHead(500, { 'Content-Type': 'text/html' });
                    resp.write("Internal Server Error");
                    resp.end();
                    return;
                }

                // Replace Data
                successData = successData.replace("{name}", readableData.name);

                successData = successData.replace("{email}", readableData.email);

                successData = successData.replace("{phone}", readableData.phone);

                successData = successData.replace("{city}", readableData.city);

                successData = successData.replace("{message}", readableData.message);

                resp.writeHead(200, { 'Content-Type': 'text/html' });

                resp.write(successData);

                resp.end();

            });

        });

    }

}).listen(3000);

console.log("Server running on http://localhost:3000");