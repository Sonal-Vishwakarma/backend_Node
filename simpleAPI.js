const http = require('http');

const userData =[
    {
        name:"John Doe",
        age:25,
        email:"john.doe@example.com"
    },
    {
        name:"smith",
        age:67,
        email:"smith@example.com"
    },
    {
        name:"emily",
        age:78,
        email:"emily@example.com"
    },
    {
        name:"Victor",
        age:90,
        email:"victor@example.com"
    }
]

const server=http.createServer((req,resp)=>{
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
})
server.listen(6100);