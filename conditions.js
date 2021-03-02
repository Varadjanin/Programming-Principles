/*
Write a program that compares
two numbers and display the
larger. Result should be
displayed in the console.
*/
var a=1;
var b=2;
(a>b) ? console.log("Veci broj je a:", a) : console.log("Veci broj je b:", b);


/*
Write a program to check if the
number is divisible by 2. If it
is, print even, if not, print
odd.

Sample numbers: 3, 4, 9 (check one at the time)

Output: odd, even, odd
*/
var c = 3;
if (c%2===0) {
    console.log("even");
} else {
    console.log("odd");
}

/*
Write a program to check if the
number is divisible by 3 and 5.
If it is, print that number.

Sample numbers: 15, 12 (check one at the time)

Output: 15
*/
var broj = 15;
if (broj%3===0 && broj%5===0) {
    console.log(broj);
}


/*
Write a conditional statement to
find the sign of product of
three numbers. Display the
result in the console with the
specified sign.

Sample numbers: 3, -7, 2

Output: The sign is -
*/
var d=3;
var e=-7;
var f=2;
if ((d+e+f)>=0) {
    console.log("The sign of products is +");
} else {
    console.log("The sign of products is -");
}

/*
Write a program to check if the
variable is a number. If it’s a
number, check if it is divisible
by 2. If it is, print the
result, if not, show “X”

Sample numbers: 10 | 7 (check one at the time)

Output: 10 / 2 = 5 | X
*/
var x = 10;
if (typeof x === "number") {
    if (x%2===0) {
        console.log(x, " / 2 = ", x/2);
    } else {
        console.log("X");
    }
}

// Same code as above just written in a more readable way
var input = 103; // Replace these values to try other inputs
var isNumber = (typeof input) == "number";
if (isNumber) {
// New variable with boolean type for sake of readability
    var isDevisableByTwo = (input % 2) === 0;
    if (isDevisableByTwo) {
// We need to display the division result so we create a new variable
// to store that result
        var divisionResult = input / 2;
// Now we form a string to display our result
        var outputText = input + " / 2 = " + divisionResult;
        console.log(outputText);
    } else {
// We are just displaying &X& as it was required in assignment
        console.log("x");
    }
}



/*
Write a conditional statement to
find the largest of five
numbers. Display the result in
console.

Sample numbers: -5, -2, -6, 0, -1

Output: 0
*/
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
if (a>b && a>c && a>d && a>e) {
    console.log("The largest number is ", a);
} else if (b>a && b>c && b>d && b>e) {
    console.log("The largest number is ", b);
} else if (c>b && c>a && c>d && c>e) {
    console.log("The largest number is ", c);
} else if (d>b && d>a && d>c && d>e) {
    console.log("The largest number is ", d);
} else {
    console.log("The largest number is ", e);
}



/*
Write a conditional statement to
sort three numbers.

Sample numbers : 0, -1, 4

Output : 4, 0, -1
*/
var a = 0;
var b = -1;
var c = 4;
if (a>b && a>c) {
    if (b>c) {
        console.log(a,b,c);
    } else {
        console.log(a,c,b);
    }
} else if (b>a && b>c) {
    if (a>c) {
        console.log(b,a,c);
    } else {
    console.log(b,c,a);
    }
} else if (c>a && c>b) {
    if (a>b) {
        console.log(c,a,b);
    } else {
        console.log(c,b,a)
    }
}

/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F
*/
var input = 60;
var F = (9*input/5)+32;
var C = (F-32)*5/9;
console.log("Temperatura ", C, "*C je ", F, "*F." );

/*
Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38
*/
var input = 11;
var rezultat = input-13;
if (input>13) {
    console.log(rezultat*2);
} else {
    console.log(-rezultat);
}


/*
Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48
*/
var input1 = 8;
var input2 = 8;
var rezultat = input1+input2;
if (input1===input2) {
    console.log(rezultat*3);
} else {
    console.log(rezultat);
}


/*
Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true
*/
var input1 = 40;
var input2 = 10;
var zbir = input1+input2;
if (input1===50 || input2===50 || zbir===50) {
    console.log("True.");
} else console.log('-');


/*
Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
*/
var input = 256;
if (input<20 || input>400) {
    console.log("-");
} else if (20<input && input<100) {
    console.log('20-100');
} else {
    console.log('100-400');    
}


/*
Dariovo objasnjenje:
*/
var isLoggedIn = false;
var isAdmin = false;

//first case
if (isLoggedIn) {
	console.log('ulogovan je')
}

//second case
if (isLoggedIn) {
	console.log('ulogovan je')
} else {
	console.log('nije ulogovan')
}

//third case
if (isLoggedIn) {
	console.log('ulogovan je')
} else if (isAdmin) {
	console.log('administrator je')
} else {
	console.log('nije nista')
}

isLoggedIn ? console.log('ulogovan je') : console.log('nije ulogovan');


var a;
var number = 12;

if (number > 0) {
	a = 'pozitivan';
} else {
	a = 'negativan';
}

a = (number > 0) ? 'pozitivan' : 'negativan';
