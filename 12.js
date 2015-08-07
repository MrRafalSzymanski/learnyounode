/**
 * @author rafal
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * HTTP UPPERCASERER
 * Exercise 12 of 13
 * 
 * Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.
 * 
 * Your server should listen on the port provided by the first argument to your program.
 * -------------------------------------------------------------------------------
 */

var httpModule = require("http");

var server = httpModule.createServer(function (request, response) {
  	if(request.method === "POST"){
		var postBody = "";
		
		response.writeHead(200, {'Content-Type': 'text/plain' });
  	
        request.on('data', function (data) {
            postBody += data;
        });
        
        request.on('end', function () {
            response.end(postBody.toUpperCase());  
        });        
  	}  	
});

server.listen(parseInt(process.argv[2]));