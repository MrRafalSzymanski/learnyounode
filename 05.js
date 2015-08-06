/**
 * @author rafal
 * 
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * FILTERED LS
 * Exercise 5 of 13
 * 
 * Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.
 *
 * For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.
 * 
 * The list of files should be printed to the console, one file per line. You must use asynchronous I/O.
 * -------------------------------------------------------------------------------
 */

//Load I/O module
var fs = require("fs");

//Regular expression that checks whether string ends with particular string
var regexRule = new RegExp("." + process.argv[3] + "$");

//Read file asynchronously
fs.readdir(process.argv[2], function(err, files){
	
	//Calling anonymous function for each element of the array (all files in folder)	
	files.forEach(function(element, index, array){
		//Testing against matching regular expression
		if(regexRule.test(element)){
			console.log(element);
		}	
	});
});
