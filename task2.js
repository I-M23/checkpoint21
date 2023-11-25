const http = require ('http');

http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html')
res.end('<h1>Hello node</h1>')
}).listen(4000)

console.log('the server is running in port 4000');