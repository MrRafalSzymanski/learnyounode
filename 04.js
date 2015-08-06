/**
 * @author rafal
 * 
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * MY FIRST ASYNC I/O!
 * Exercise 4 of 13
 * 
 * Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
 * 
 * The full path to the file to read will be provided as the first command-line argument.
 * -------------------------------------------------------------------------------
 */

//Load I/O module
var fs = require("fs");

//Read file asynchronously
fs.readFile(process.argv[2], function(err, data){
	var	fileBuf = data;

	//Convert Buffer object to Sttring
	var	fileBufString = fileBuf.toString();
	
	//Split by newline character
	var	fileBufStringSplit = fileBufString.split('\n');
	
	//Last line doesn't have newline character
	var fileBufLen = fileBufStringSplit.length - 1;
		
	console.log(fileBufLen);
});