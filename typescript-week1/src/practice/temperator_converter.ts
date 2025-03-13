function celciusToFahrenheit(celcius : number): number {
    return (celcius*9)/5 + 32;
}

function fahrenheitToCelcius(fahrenheit: number): number {
    return ((fahrenheit - 32)*5)/9;
}

let celcius : number = 30;
let fahrenheit : number = 86;

console.log(`${celcius}°C is equal to ${celciusToFahrenheit(celcius)}°F`);
console.log(`${fahrenheit}°F is equal to ${fahrenheitToCelcius(fahrenheit)}°C`);
