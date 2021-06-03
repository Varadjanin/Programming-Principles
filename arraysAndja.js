// 1.
var numbers = [1, 2, 3, 4, 5];
var number1 = numbers.pop();
var number2 = numbers.pop();
numbers.push(number1 + number2);
console.log(numbers);

// 1.5 ;)
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]);

// 2.
var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[numbers.length];
console.log(numbers);

// 3.
var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[numbers.length - 1];
console.log(numbers);

// 4.
var numbers = [1, 2, 3, 4, 5];
numbers.length = 10;
console.log(numbers);

// 5.
var smallNumbers = [1, 2, 3, 4, 5];
var niceNumbers = [1, 2, 3, 4, 5];
console.log(smallNumbers === niceNumbers);

// poredjenje generisanjem string reprezentacija
console.log(smallNumbers.join('') === niceNumbers.join(''));

// poredjenje obilaskom niza
var equalArrays = true;
for (var i = 0; i < smallNumbers.length; i++) {
  if (smallNumbers[i] != niceNumbers[i]) {
    equalArrays = false;
    break;
  }
}
console.log(equalArrays);

// 6.
var numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);

// 7.
var numbers = [1, 2, 3, 4, 5];
numbers.push('~');
numbers.unshift('~');
console.log(numbers.join('*'));

// 8.
// sort radi u mestu (engl. in place) i vrsi leksikografsko sortiranje
var numbers = [1, 89, 3, 4, 10, 20, 50];
numbers.sort();
console.log(numbers);

// 9.
// varijanta numerickog sortiranja u rastucem poretku
var numbers = [1, 89, 3, 11, 4, 20, 50];
numbers.sort(function (number1, number2) {
  var number1 = parseInt(number1);
  var number2 = parseInt(number2);

  return number2 - number1;
});
console.log(numbers);

// 10.
var points = [
  { x: 5, y: 10 },
  { x: -1, y: 4 },
  { x: 0, y: 5 },
  { x: 2, y: 12 },
];
points.sort(function (point1, point2) {
  // sortiranje po vrednosti x koordinate u rastucem poretku
  return point1.x - point2.x;
});
console.log(points);

// 11.
var fruits = ['apple', 'orange', 'lemon', 'grape', 'strawberry'];
var salad = fruits.slice(3, 5);
salad.push('cream');
console.log(salad);

// 12.
var chars = ['a', 'b', 'c', 'd'];
console.log(chars.join(''));

// 13.
var chars = ['a', 'b', 'c', 'd'];
chars[7] = 'm';
console.log(chars.length);

// 14.
function misticFunction(array) {
  var newArray = [];
  // array: ['a', 'b', 'd', 'u']
  // newArray: ['u', 'd', 'b', 'a']

  for (var i = 0; i < array.length; i++) {
    newArray[array.length - 1 - i] = array[i];
  }
  return newArray;
}
var misticResult = misticFunction(['a', 'b', 'd', 'u']);
console.log(misticResult);

// 15. 
function misticFunction(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] += array[i];
  }
}
var numbers = [1, 2, 3, 4, 5];
misticFunction(numbers);
console.log(numbers);