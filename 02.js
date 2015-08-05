/**
 * @author rafal
 */

//Storing passed parameters (without the command and path)
var args = process.argv.slice(2);

//Using reduce to sum array elements converted to ints, additional checks for type would be nice
var sum = args.reduce(function(prev, curr, idx, array){	
	return parseInt(prev) + parseInt(curr);
});

console.log(sum);