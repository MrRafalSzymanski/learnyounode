/**
 * @author rafal
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * TIME SERVER
 * Exercise 10 of 13
 *
 * Write a TCP time server!
 *
 * Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:
 *
 * "YYYY-MM-DD hh:mm"
 *
 * followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:
 *
 * "2013-07-06 17:42"
 * -------------------------------------------------------------------------------
 */

var netModule = require("net");

var netServer = netModule.createServer(function callbackFunction(socket) {
  var currDate = new Date();
  var currDateString = "";
  var currDateYear = currDate.getFullYear();
  var currDateMonth = pad(currDate.getMonth() + 1);
  var currDateDay = pad(currDate.getDate());
  var currDateHours = pad(currDate.getHours());
  var currDateMinutes = pad(currDate.getMinutes());

  currDateString += currDateYear + "-" + currDateMonth + "-" + currDateDay + " " + currDateHours + ":" + currDateMinutes;

  socket.end(currDateString);
});

netServer.listen(parseInt(process.argv[2]));

function pad(n) {
  return (n < 10) ? ("0" + n) : n;
}
