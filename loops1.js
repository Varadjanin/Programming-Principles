/*
Write a program that will iterate from 0 to 10 and display squares of numbers.
*/

for (var x = 0; x <= 10; x++) {
console.log(x * x);
}
/*
1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.
*/

for (let x = 0; x < 15; x++) {
    if (x%2===0) {
        console.log("The number", x, "is even.");        
        } 
    else {
        console.log("The number", x, "is odd.");
        }   
}
/*
2. Write a program to sum the multiples of 3 and 5 under 1000.
*/
var result = 0;
for (var x = 1; x<1000; x++) {
    if (x%3===0 & x%5===0) {
        result += x;
    }
}
console.log(result);
/*
3. Write a program to compute the sum and product of an array of integers.
*/
var p = 1;
var s = 0;
var a = [1, 2, 3, 4, 5, 6, 7];
for (var x=0; x<a.length; x++) {
    s += a[x];
    p *= a[x];
}
console.log(s, p);
/*
4. Write a program which prints the elements of the following array as a single string.
var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
*/
var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var result = '';
//console.log(x[0]+x[1]+x[2]+x[3]+x[4]+x[5]+x[6]+x[7]);
for (var a=0; a<x.length; a++) {
    result += x[a]; 
}
console.log(result);
/*
5. Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];
*/
var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];
for (var i=0; i<a.length; i++) {
    for(var j=0; j<a[1].length; j++) {
        console.log(a[i][j]);
    }
}

/*
6. Write a program that outputs the sum of squares of the first 20 numbers.
*/
var s = 0;
for (var x=0; x<20; x++) {
    s += x*x;
}
console.log(s);
/*
7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.
David 80
Marko 77
Dany 88
John 95
Thomas 68

The grades are computed as follows :
< 60% F
< 70% D
< 80% C
< 90% B
< 100% A
*/
result = 0;
sum = 0;
var a = [80,77,88,95,68];
for (var x=0; x<a.length; x++) {
    sum += a[x];
}
averageMark = sum/a.length;
if (averageMark<=60) {
    console.log("The average grade is F.")
} else if (averageMark>=60 || averageMark<70) {
    console.log("The average grade is D.")
} else if (averageMark>=70 || averageMark<80) {
    console.log("The average grade is C.")
} else if (averageMark>=80 || averageMark<90) {
    console.log("The average grade is B.")
} else if (averageMark>=90) {
    console.log("The average grade is A.")
}
/*
8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).
Note: This is actually an interview question that has been claimed to weed out a significant
percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
good about yourself.
*/
var result = [];
for (var x=0; x<100; x++) {
    if (x%3===0 & x%5===0) {
        result[x] = "FizzBuzz";
    }
    else if (x%3===0) {
        result[x] = "Fizz";
    }
    else if (x%5===0) {
        result[x] = "Buzz";
    }
    else {
        result[x] = x;
    }
}
console.log(result);

/*Sasino resenje:
*/
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
/*
*/