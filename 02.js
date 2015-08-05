/**
 * @author rafal
 */

var args = process.argv.slice(2);

var sum = args.reduce(function(prev, curr, idx, array){	
	return parseInt(prev) + parseInt(curr);
})

console.log(sum);