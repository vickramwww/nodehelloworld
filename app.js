var http = require("http");

var request = (request, response) => {
    response.writeHead("200", {
        'Content-Type':'text/plain'
    });
    response.write("<h1>This is my test node App</h1>");
    response.end();
}

    http.createServer(request).listen(8080)
console.log("Listening on 8080..")