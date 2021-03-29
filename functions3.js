/*
1. Write a program to insert a string within a string at a particular position (default is 1,
    beginning of a string).
    "My random string", "JS " -> "JS My random string"
    "My random string", "JS ", 10 -> "My random JS string"
*/

function stringInString(string1, string2, positionElement) {
    var string3 = "";
    for (var i = 0; i < string1.length; i++){
        if (i !== positionElement){
            string3 += string1[i];
        }
        else if(i === positionElement) {
            string3 += string2 + string1[i];
        }
    }
    return string3;
}
var a = "My random string";
var b = "JS ";
var c = 10;
var result = stringInString(a,b,c);
console.log(result);

/*
    2. Write a program to join all elements of the array into a string skipping elements that are
    undefined, null, NaN or Infinity.
    [NaN, 0, 15, false, -22, '', undefined, 47, null]
*/

function arrayToString(array) {
    var string ="";
    for (var i=0; i<array.length; i++) {
        if(!isFinite(array[i]) || array[i] === undefined || array[i] === null){
        } else {
            string += array[i];
        }
    }
    return string;
}
var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(arrayToString(a));

/*
    3. Write a program to filter out falsy values from the array.
    [NaN, 0, 15, false, -22, '';, undefined, 47, null] --> [15, -22, 47]
*/

function trueArray(array) {
    var array2 = []; 
    for(var i = 0; i < array.length; i++){
        if(!!array[i] === true){
            array2[array2.length] = array[i]; 
        }
    }
  return array2;  
}
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(trueArray(array));

/*
    4. Write a function that reverses a number. The result must be a number.
    12345 --> 54321 // Output must be a number
*/

function reversesNumber(number) {
    var b = "" + number;
    var result ="";
    for (var i = (b.length-1); i >=0; i--){
        result += b[i];
    }
    return parseInt(result);
}
var a = 456789;
console.log(reversesNumber(a));

/*
    5. Write a function to get the last element of an array. 
    Passing a parameter 'n' will return the last 'n' elements of the array.
    [7, 9, 0, -2] -> -2
    [7, 9, 0, -2], 2 -> [0, -2]
*/

function lastElement(array, n) {
    var result = [];
    if(n === undefined){
        result[result.length] = array[array.length - 1]; 
    }
    else{
        for (var i = array.length - n; i < array.length; i++){
            result[result.length] = array[i];
        }
    }
    return result;
}
var a = [7, 9, 0, -2];
var b = 3;
console.log(lastElement(a, b));

/*
    6.Write a function to create a specified number of elements with pre-filled numeric value array.

    6, 0 -> [0, 0, 0, 0, 0, 0]
    2, "none" -> ["none", "none"]
    2 -> [null, null] 
*/

function numberOfElement(numberOfElements,element) {
    var result = [];
    for(var i = 0; i < numberOfElements; i++){
        if (element !== undefined){ 
            result[i] = element;
        }
        else{
        result[i] = null;
        }
    }
    return result;
}
console.log(numberOfElement(4, "D"));

/*
    7.Write a function that says whether a number is perfect.
    28 -> 28 is a perfect number.
    Note: According to Wikipedia: In number theory, a perfect number is a positive integer 
    that is equal to the sum of its proper positive divisors, 
    that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). 
    Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
    E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. 
    Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. 
    The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

*/

function isPerfect(number) {
    var aliquotSum = 0;
    for(var i=1; i<number-1; i++) {
        if(number%i===0) {
        aliquotSum += i;
        }
    }
    if(number === aliquotSum) {
        return true;
    } else {
        return false;
    }
}
console.log(isPerfect(8128));

/*
    8. Write a function to find a word within a string.
    'The quick brown fox', 'fox' -> "'fox' was found 1 times"
    'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

*/

function wordWithinString(str, word) {
    var counter = 0, y=0;
    for (i=0;i<str.length;i++) {
        if(str[i] == word[0]) {
            for(j=i; j<i+word.length; j++) {
                if(str[j]==word[j-i]) {
                    y++;                           
                  }
                if (y==word.length){
                    counter++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+counter+" times.";
}

console.log(wordWithinString("The quick brown fox", "fox"));


/*
    9. Write a function to hide email address.
    "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

*/

function hideEmail(email) {
var avg, splitted, part1, part2;
    splitted = email.split("@");        //didn't know how to do this one!
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
}

console.log(hideEmail("myemailaddress@gmail.com"));

/*
    10. Write a program to find the most frequent item of an array.
    [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

*/

function mostFrequentItem(arr) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<arr1.length; i++)
    {
            for (var j=i; j<arr1.length; j++)
            {
                    if (arr1[i] == arr1[j])
                     m++;
                    if (mf<m)
                    {
                      mf=m; 
                      item = arr1[i];
                    }
            }
            m=0;
    }
    return item+" ( " +mf +" times ) ";
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequentItem(arr1));