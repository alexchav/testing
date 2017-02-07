var http=require('http');

http.createServer(function (req,resp) {
    resp.end("WORKING");
}).listen(3000);