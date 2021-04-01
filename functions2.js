/*
1. Write a function to check whether the `input` is a string or not.
"My random string" --> true
12 --> false
*/

function isString(x) {
    return  typeof x === "string";
}
console.log(isString("KUKUUU"));

/*
2. Write a function to check whether a string is blank or not.
"My random string" --> false
" " --> true
12 --> false
false --> false
*/

function isBlank(x) {
    if (x===" ") {
        return true;
    } else {
        return false;
    }
}
console.log(isBlank("My random string"));

/*
3. Write a function that concatenates a given string n times (default is 1).
"Ha" --> "Ha"
"Ha", 3 --> "HaHaHa"
*/

function concatenateString(str, n) {
    result = ' ';
    for(var i=0; i<n; i++) {
        result += str;
    }
    return result;
}
console.log(concatenateString(56, 3));


/*
4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" --> 2
*/

function letterCounter(str, n) {
    var counter = 0;
    for (var i=0; i<str.length; i++) {
        if (str[i] === n) {
            counter++;
        }
    }
    return counter;
}

console.log(letterCounter("marina varadjanin", "n"));

/*
5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. */

function firstOccurrence(str, x) {
    var result = 0;
    for(var i=0; i<str.length; i++) {
        if(str[i] === x) {
            result = i;
            i = str.length;
        } else {
            result = -1;
        }
    }
    return result;
}

console.log(firstOccurrence("bananaia", "m"));

/*
6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

function lastOccurrence(str, x) {
    var result = -1;
    for(var i=0; i<str.length; i++) {
        if(str[i] === x) {
            result = i+1;
        }
    }
    return result;
}

console.log(lastOccurrence("bananamamamama mia", "m"));

/*
7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" --> ["M", "y", nu"ll, "r", "a"]
"Random" --> ["R", "a", "n", "d", "o", "m"] */

function stringIntoArray(x) {
    arr = [];
    for(var i=0; i<x.length; i++) {
        if(x[i] === ' ') {
            arr[i] = null;
        } else {
        arr[i] = x[i];
        }
    }
    return arr;
}
console.log(stringIntoArray("My random string"));

/*
8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */

function isPrime(x) {
    var counter = 0;
    for(var i=2; i<x; i++) {
        if(x%i===0) {
            counter++;
        }
    }
    if(counter>0) {
        return "The number is not a prime."
    } else {
        return "The number is a prime."
    }
}

console.log(isPrime(17));

/*
9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
"My random string", "_" --> My_random_string"
"My random string", "+"" --> "My+random+string"
"My random string" --> "My-random-string" */

function replaceSpace(str, x) {
    var newString = '';
    if(typeof(x) === 'undefined') {
        x="-";
    }
    for(var i=0; i<str.length; i++) {
        if(str[i]!== " ") {
            newString += str[i];
        } else {
            newString += x;
        }
    }
    return newString;
}

console.log(replaceSpace("My random string"));

//10. Write a function to get the first n characters and add “...” at the end of newly created string.

function frankenstajn(a,b,c,d) {
    var result = "" + a + b + c + d + "...";
    return result;
}

console.log(frankenstajn(5,3,4,6));

//or:

function frankenstajn2(str, n) {
    var result = '';
    for(var i=0; i<n; i++) {
        result += str[i]
    }
    result += "...";
    return result;
}

console.log(frankenstajn2("mackanalimenomkrovu", 4));


/*11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] --> [1, 21, 42, 1000]*/

function strToNumbers(arr) {
    var newArr = [];
    var y=0;
    for(var i=0; i<arr.length; i++) {
        if(isFinite(arr[i])) {
            newArr[y] = parseFloat(arr[i]);
            y++;
        }
    }
    return newArr;
}

console.log(strToNumbers(["1", "21", undefined, "42", "1e+3", Infinity]));

/*
12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.*/

function retirementCountdown(year, gender) {
    var age = 2021-parseInt(year);
    var resultM = 65- age;
    var resultF = 60- age;
    if(gender === 'm') {
        if(age<65) {
            return resultM;
        } else {
            return "You are already retired."
        }
    } else {
        if(age<60) {
            return resultF;
        } else {
            return "You are already retired."
        }
    }
}

console.log(retirementCountdown("1985", "f"));

/*
13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 --> 1st
11 --> 11th*/

/*function humanizeNumber (x) {
    var str = '' + x;
    var result = '';
    if (str[str.length-1] == 1) {
        result = str + 'st';
    } else if(str[str.length-1] == 2) {
        result = str + 'nd';
    } else if (str[str.length-1] == 3) {
        result = str + 'rd';
    } else {
        result = str + "th";
    }
    return result;
}

console.log(humanizeNumber(948476573)); */

function humanize(number) {
    if(number % 100 >= 11 && number % 100 <= 13)
        return number + "th";
    
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";
}

console.log(humanize(11)); 
