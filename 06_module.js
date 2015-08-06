/**
 * @author rafal
 * 
 * Module for "MAKE IT MODULAR" task
 */


module.exports = function(dirname, extension, callback){	
	var fs = require("fs");
	var regexRule = new RegExp("." + extension + "$");
	var filteredFiles = [];
	
	fs.readdir(dirname, function(err, files){
		if(err){
			return callback(err);
		}
		
		//Calling anonymous function for each element of the array (all files in folder)	
		files.forEach(function(element, index, array){
			//Testing against matching regular expression
			if(regexRule.test(element)){
				filteredFiles.push(element);
			}	
		});
		
		return callback(null, filteredFiles);	
	});
};