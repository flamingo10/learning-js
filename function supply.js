function calculateSupply(age, amount) {
var rest = (100 - age) * amount * 365;
	console.log('You will need ' + rest + ' to last you until the ripe old age of ' + '100');
}

calculateSupply(10, 17);