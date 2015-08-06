/**
 * @author rafal
 * 
 * LEARN YOU THE NODE.JS FOR MUCH WIN!
 * ─────────────────────────────────────
 * BABY STEPS
 * Exercise 2 of 13
 * 
 * Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).
 * -------------------------------------------------------------------------------
 */

//Storing passed parameters (without the command and path)
var args = process.argv.slice(2);

//Using reduce to sum array elements converted to ints, additional checks for type would be nice
var sum = args.reduce(function(prev, curr, idx, array){	
	return parseInt(prev) + parseInt(curr);
});

console.log(sum);