/**
 * @author rafal
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * HTTP FILE SERVER
 * Exercise 11 of 13
 * 
 * Write an HTTP server that serves the same text file for each request it receives.
 * 
 * Your server should listen on the port provided by the first argument to your program.
 * 
 * You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.
 * -------------------------------------------------------------------------------
 */

var httpModule = require("http");
var fsModule = require("fs");

var server = httpModule.createServer(function (request, response) {
  var fileStrem = fsModule.createReadStream(process.argv[3]);
  fileStrem.pipe(response);
});

server.listen(parseInt(process.argv[2]));