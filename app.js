const http = require('http');
const os = require('os');

var handler = function (request, response) {
    response.writeHead(200);
    const version = "1.1";
    const hostname = os.hostname();
    response.end("Nodejs Demo " + version + " running on " + hostname + "\n");
}

var www = http.createServer(handler).listen(80,'0.0.0.0');
console.log('http server started successfully');
