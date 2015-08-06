/**
 * @author rafal
 * 
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * JUGGLING ASYNC
 * Exercise 9 of 13
 * 
 * This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.
 * 
 * You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.
 * -------------------------------------------------------------------------------
 */

var httpModule = require("http");
var passedURLs = process.argv.slice(2);
var dataStrings = [];
var requestLeftCount = passedURLs.length;

var requestsCheck = setInterval(function(){
	if(!requestLeftCount){
		clearInterval(requestsCheck);
		dataStrings.forEach(function(element, index, array){
			console.log(element);
		});		
	}	
},500);

passedURLs.forEach(function(element, index, array){
	var getRequest = httpModule.get(element, function(response){
		var completeResponse = [];
		
		response.setEncoding("utf8");
		
		response.on("data", function(data){		
			completeResponse.push(data);
		});
		
		response.on("end", function(){
			dataStrings[index] = completeResponse.join("");
			requestLeftCount--;
		});
		
		getRequest.on("error", function(err){
			console.error("There was an error", err);
			requestLeftCount--;
		});
	});
});
