// writing more tests

// testing of equality and inequality with string
let myString = 'hamza'
console.log(myString == 'hamza');
let myString1 = 'ali'
console.log(myString1 == 'hamza')


// test using lowercase functions
let string2 = 'Hamza'
console.log(string2.toLowerCase() == 'hamza');

//Numerical tests
console.log(2==8);
console.log(4==4);
console.log(4>1);
console.log(5<1);

//more numerical tests
let a = 7;
let b= 5;
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);


// tests using AND and OR operator
var x = 89;
var y = x > 60 && x < 90;
console.log(y)

var x1 = 90;
var z = x1 > 100 || x1 < 100;
console.log(z)

// to cx wheater an item is in array or not
let array = [3,5,7,9];// by usig include()method
console.log(array.includes(10));//false
console.log(array.includes(7));//true

// to check if an element is not present in array
let array1 = [3,5,7,9];// by usig indexOf()method
console.log(!array.includes(10));//true
console.log(!array.includes(7));//false



