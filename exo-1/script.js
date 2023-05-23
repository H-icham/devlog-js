// you can write js here
console.log('hello from file');
//var kelvins = 294;
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
var Celsius = kelvins - 273;
console.log(Celsius);

var fahrenheits = Celsius * (9/5) + 32
console.log(Math.floor(fahrenheits))
