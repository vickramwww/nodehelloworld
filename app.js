var http = require("http");

var request = (request, response) => {
    response.writeHead("200", {
        'Content-Type':'application/json'
    });

    var jsonResult = "[{\"Identifier:\":100, \"Name\":\"Vickram\", \"Age\": \"abc\"}]";
    response.write(jsonResult);
    response.end();
}

http.createServer(request).listen(8080)
console.log("Listening on 8080..");