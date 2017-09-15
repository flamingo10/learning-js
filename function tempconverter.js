function celsiusToFahrenheit(C) {
	var Fahr = (C*9)/5 + 32;
		console.log(C + '°C is ' + Fahr + '°F');
}
function fahrenheitToCelsius(F) {
	var Cels = ((F - 32)*5)/9;
		console.log(F + '°F is ' + Cels + '°C');
}