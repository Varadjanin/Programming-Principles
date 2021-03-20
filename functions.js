//1. Write a program that calculates the maximum of two given numbers.

function max(a, b) {
    if(a<b) {
        return b;
    } else {
        return a;
    }
}

//2. Write a program that checks if a given number is odd.

function odd(x) {
    if(x%2===0) {
        return "The number is even."
    } else {
        return "The number is odd."
    }
}

//3. Write a program that checks if a given number is a three digit long number.

function threeDigitNo(x) {
    if(x>99 && x<1000) {
        return "This is a three digit long number."
    } else {
        return "This is not the three digit long number."
    }
}

//4. Write a program that calculates an arithmetic mean of four numbers.

function averige(a,b,c,d) {
    var x = (a+b+c+d)/4;
    return x;
}

/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****
*/

function square(x) {
    var red = '';
    for(var i=0; i<x; i++) {
        if (i===0 || i===x-1) {
            for(var j=0; j<x; j++) {
                red += "*";
            }
            red = red + '\n';
        } else {
        red = red + '* *' + '\n';
        }
    }
    return red;
}
var proba = square(5);
console.log(proba);




/*
6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/

function chart(a,b,c) {
    var red = '';
    for(var i=0; i<3; i++) {
        if (i===0) {
            for(var j=0; j<a; j++) {
                red += "*";
            }
            red = red + '\n';
        } else if (i===1) {
            for(var j=0; j<b; j++) {
                red += "*";
            }
            red = red + '\n';
        } else {
            for(var j=0; j<c; j++) {
                red += "*";
            }
            red = red + '\n';
        }
    }
    return red;
}
var proba = chart(5,3,7);
console.log(proba);

//7. Write a program that calculates a number of digits of a given number.

function digitsNo(x) {
    var str = x + '';
    var result = str.length;
    return result;
}

var result = digitsNo(123456789);
console.log(result);


/*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/

function appear(x, array) {
    var y=0;
    for(var i=0; i<array.length; i++) {
        if(array[i] === x) {
            y++;
        }
    }
    return y;
}
var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7
var result = appear(e, a);
console.log(result);

//9. Write a program that calculates the sum of odd elements of a given array.

function oddSum(array) {
    var result = 0;
    for(var i=0; i<array.length; i++) {
        if(array[i]%2!==0) {
            result += array[i];
        }
    }
    return result;
}

var a=[1,2,3,4,5];
var result = oddSum(a);
console.log(result);


/*10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.
*/

function letterCounter(a, string, A) {
    var y=0;
    for(var i=0; i<string.length; i++) {
        if (string[i]===a || string[i]===A) {
            y++;
        }
    }
    return y;
}
var a = 'a';
var A = 'A';
var string = '"mamanemAmpojmA"'
var result = letterCounter(a, string);
var result1 = letterCounter(a, string, A);
console.log(result);
console.log(result1);



/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc. */

function multiplyStr(str, x) {
    var result = '';
    for(var i=0; i<x; i++) {
        result += str;
    }
    return result;
}
var str = 'marina';
var x = 3;
var result = multiplyStr(str, x);
console.log(result);
