/*
Exercise 1)
Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
*/
var arr_1 = [3,5,22,5,7,2,45,75,89,21,2];
var arr_2 = [9,2,42,55,71,22,4,5,90,25,26];
var y=0;
var s1=0;
var s2=0;
for (var x=0; x<arr_1.length; x++) {
    var s1 = s1 + arr_1[x];
    var s2 = s2 + arr_2[y];
    y++
}
console.log(s1, "+", +s2, "=", (s1+s2));


/*
Exercise 2)
Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
*/ 

var n1 = 22;
for (var x=0; x<n1+1; x++) {
    if (x%2===0 && x!==0) {
        console.log(x);
    }
}

/*
Exercise 3)
Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3  be  false cannot  true 9 what 43 OR each item on a new line
*/

var arr = [43, "what", 9, true, "cannot", false, "be", 3, true]
for (var x=0; x<arr.length; x++) {
    console.log(arr[arr.length-1-x]);
}

/*
Exercise 4)
Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.

 
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]
*/

var arr_3 = [4, 6, 7];
var arr_4 = [8, 1, 9];
var arr = [];
for (var x=0; x<arr_3.length; x++) {
    arr[x] = arr_3[x] + arr_4[x];
}
console.log(arr);

/*
Exercise 5)
Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.

let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 
*/

var str1 = "javascript"; 
var str2 = [];
for (var x=0; x<str1.length; x++) {
    if ((x+1)%2==0) {
        str2[x] = "Z";
    } else {
        str2[x] = str1[x];
    }
}
console.log(str2);


/*
Exercise 6)
Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str2 = "don’t know why";
// Example output: 
// “yes” 
*/
var str2 = "don’t know why";
for (var x=0; x<str2.length; x++) {
    if (str2[x]=="y") {
        result = "Yes.";
    } else {
        result = "No.";
    }
}
console.log(result);

/*
Exercise 7)
Given a number n Calculate the factorial of the number

let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24
*/

var n2 = 4;
var result = 1;
for (var x=1; x<=n2; x++) {
    result = result * x;
}
console.log(result);

/*
Exercise 8)
Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.

let pin = 0704;
// Example output:
// Please make your guess: 
// 4544 
// Sorry that was wrong.
// Please make your guess: 
// 4444
// Sorry that was wrong.
// Please make your guess: 
// 0704
// That was correct!
*/
//the code is solving the problem, but doesn't give me the exact output as requested in this example.
var pin = 0704;
var guess = 4544;

for (var x=0; x<4; x++) {
    if (guess!==pin) {
        console.log("Sorry that was wrong.\n Please make your guess:" );
    } else {
        console.log("That was correct.");
        x=5;
    }
}


//another partial solution:

switch (pin) {
    case 0704:
        console.log("That was correct."); 
        break;
    default:    
        result = "Sorry that was wrong.\n Please make your guess:";    
        break;
}





/*
Exercise 9)
Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run.

let str3 = "racecar";
let str4 = "Java";
// Example output:
// string1 palindrome?: 
// Yes 
// string2 palindrome?: 
// No 
*/
//it has to be written without space
//the code is solving the problem, but doesn't give me the exact output as requested in this example.
var str3 = "racecar";
var str4 = "Java";
var isSym = true;
for (var start=0, end=str3.length-1; start<end; start++, end--) {
    if (str3[start] !== str3[end]) {
        isSym = false;
    }
}
console.log(isSym ? "Yes": "No")

/*
Exercise 10)
This is a code wars kata. click here to train on “Grasshopper – Summation” on
code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

let num1 = 2; 
let num2 = 8; 
// Example output: 
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 
*/

function summation(x) {
    var result = 0;
    var str = '';
    for (var i=1; i<x+1; i++) {
        result += i;
        if (i === x) {
            str += i + ' ';
        } else {
            str += i + ' + ';
        }
        final = str + '= '+ result;
    }
    return final;
}
var num1 = 2;
var num2 = 8;
result = summation(num1);
result2 = summation(num2);
console.log(result);
console.log(result2);