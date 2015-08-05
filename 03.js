/**
 * @author rafal
 */

//Load I/O module
var fs = require("fs");

//Read file synchronously
var	fileBuf = fs.readFileSync(process.argv[2]);

//Convert Buffer object to Sttring
var	fileBufString = fileBuf.toString();

//Split by newline character
var	fileBufStringSplit = fileBufString.split('\n');

//Last line doesn't have newline character
var fileBufLen = fileBufStringSplit.length - 1;
	
console.log(fileBufLen);