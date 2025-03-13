function celciusToFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}
function fahrenheitToCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
var celcius = 30;
var fahrenheit = 86;
console.log("".concat(celcius, "\u00B0C is equal to ").concat(celciusToFahrenheit(celcius), "\u00B0F"));
console.log("".concat(fahrenheit, "\u00B0F is equal to ").concat(fahrenheitToCelcius(fahrenheit), "\u00B0C"));
