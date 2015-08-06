/**
 * @author rafal
 * 
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * HTTP CLIENT
 * Exercise 7 of 13
 * 
 * Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).
 * -------------------------------------------------------------------------------
 */

var httpModule = require("http");

var getRequest = httpModule.get(process.argv[2], function(response){
	//console.log("HTTP response code: " + response.statusCode);
	response.setEncoding("utf8");
	
	response.on("data", function(data){	
		console.log(data);
	});	
});

getRequest.on("error", function(err){
	console.error("There was an error", err);	
});