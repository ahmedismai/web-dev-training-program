// The forecast today is 293 Kelvin.
const kelvin =293;

// Celsius is 273 degrees less than Kelvin.
const Celsius = kelvin-273;

// Use this equation to calculate Fahrenheit.
let Fahrenheit = Celsius * (9/5) + 32

// Round down the Fahrenheit temperature.
Fahrenheit = Math.floor(Fahrenheit);

// Use string interpolation to log the result.
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);

// BONUS: Convert Celsius to Newton scale
let newton = Celsius * (33 / 100);

// Round down the Newton temperature.
newton = Math.floor(newton);

// Log the Newton result
console.log(`The temperature is ${newton} degrees Newton.`);