/**
 * @author rafal
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * HTTP JSON API SERVER
 * Exercise 13 of 13
 * 
 * Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.
 * 
 * For example:
 * 
 * /api/parsetime?iso=2013-08-10T12:10:15.474Z
 * 
 * The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:
 * 
 * {
 * 	"hour": 14,
 *  "minute": 23,
 *  "second": 15
 * }
 * 
 * Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:
 * 
 * { "unixtime": 1376136615474 }
 *
 * Your server should listen on the port provided by the first argument to your program.
 * -------------------------------------------------------------------------------
 * 
 */

var httpModule = require("http");
var urlModule = require("url");

function isoToTime(isoDate){
	var isoDateObject = new Date(isoDate);
	
	return {
		hour: isoDateObject.getHours(),
		minute: isoDateObject.getMinutes(),
		second: isoDateObject.getSeconds()
	};
}

function isoToTUnixime(isoDate){
	var isoDateObject = new Date(isoDate);
	
	return {
		unixtime: isoDateObject.getTime()
	};
}

var httpServer = httpModule.createServer(function(request, response){
	if(request.method === "GET"){
		var requestURL = urlModule.parse(request.url, true);
		var msg = "";
		
		response.writeHead(200, { 'Content-Type': 'application/json' });
		
		request.on("data", function(data){});
		
		request.on("end", function () {
			switch(requestURL.pathname){
				case "/api/parsetime": {
					msg = isoToTime(requestURL.query["iso"]);
				} break;
				case "/api/unixtime": {
					msg = isoToTUnixime(requestURL.query["iso"]);
				} break;
				default: {
				}	
			}
			
			msg = JSON.stringify(msg);			
			response.end(msg);
        });	
    }
	else {
		response.end("Accepting only GET requests!");		
	}
});

httpServer.listen(parseInt(process.argv[2]));