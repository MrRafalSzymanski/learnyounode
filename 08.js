/**
 * @author rafal
 * 
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * HTTP COLLECT
 * Exercise 8 of 13
 * 
 * Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).
 * 
 * The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.
 * -------------------------------------------------------------------------------
 */

var httpModule = require("http");

var getRequest = httpModule.get(process.argv[2], function(response){
	//console.log("HTTP response code: " + response.statusCode);
	var completeResponse = [];
	response.setEncoding("utf8");
	
	response.on("data", function(data){		
		completeResponse.push(data);
	});
	
	response.on("end", function(){
		var completeResponseString = completeResponse.join("");				
		var charCount = completeResponseString.length;
		
		console.log(charCount);
		console.log(completeResponseString);
	});
	
});

getRequest.on("error", function(err){
	console.error("There was an error", err);	
});