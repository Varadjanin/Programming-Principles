/*
Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character.

Save a string (text) describing your current mood in a variable and print it out in console.

Feel free to play around in the console and get familiar with it.
*/


var a = 3;
var b = 2
var c = 31

var Mood = "stupid";
console.log (Mood)

/*
Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?
*/

var d = a - b - c;
var e = a * 5 - 7 / a;
console.log (d,e);
console.log(4/2-1.14*3);

/*
How many grams weight 1.2kg of bananas?
*/
var kg = 1000
var weightInKg = 1.2
var weightInGr = weightInKg * kg
console.log (weightInGr)

/*
How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days…
*/
var min = 60
var Anna = 5 * min
var Tom = 30 * min
console.log (Anna, Tom)

/*
8. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?
*/

var MB = 1000;
var GB = MB * 1000;
var usbStick = 4 * GB;
var newsArticleNo = usbStick / 98;
console.log(usbStick,newsArticleNo)

/*
Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?
*/

var a = 3;
a*=2; //a=a*2
a/=3; //a=a/3
a+=40; //a=a+40
console.log(a);

var b = 3;
b+=3; //b=b+3
var c = 5;
c/=5; //c=c/5
var d = 7;
d-=7; //d=d-7
console.log(b,c,d)
/*
Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
*/

var name = 'Marina';
var age = 35;
var cat = false;

console.log (typeof name, typeof age, typeof cat);

/*
11. Check which type are these values:
- “number”
- true
- null
- “false”
- 56
*/
console.log (
    typeof "number",
    typeof true,
    typeof null,
    typeof "false",
    typeof 56);

console.log (!!age, !!cat, !!name);


/*
Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value?
*/

console.log (!!age, !!cat, !!name);

/*
13. Use the console to check the results you think should go in the following table:

p      q         p && q     p || q
true true
true false
false true
false false

*/
var p = true;
var q = true;
console.log (p&&q, p||q);

var p = true;
var q = false;
console.log (p&&q, p||q);

var p = false;
var q = true;
console.log (p&&q, p||q);

var p = false;
var q = false;
console.log (p&&q, p||q);

/*
14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120
*/
var age = 35;
console.log (!age, age>120);

/*
15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)
*/
var speed = 20;
var safe =120;
if (speed<safe) {
    speed = true;
} else {
    speed = false;
} 
console.log ("You're driving safe:", speed)

/*
zadacici sa vezbanja uzivo
*/
console.log (!!"false");
console.log(!!undefined)
console.log(typeof -Infinity);
console.log(10 % "0");
console.log(undefined == null);
console.log(false === "");
console.log(typeof "2E+2");
a=3e+3; 
b=++a;
console.log(b);
var h=3+undefined;
console.log(h);
console.log(typeof(console.log(10+"ha"+6+6)))
var x=1, y=3, z=8
x=y=z=8
console.log(x,y,z)
var x=[1,2,3]
x.length=0
console.log(x)
console.log(2<3<1)
var x = 0x241;
console.log(typeof typeof 1)