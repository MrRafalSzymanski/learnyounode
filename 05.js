/**
 * @author rafal
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
