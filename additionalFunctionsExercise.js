/*
1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/

function reverseNumber (a) {
    var strNumber = ''+a;
    var newNumber = '';
    for(var i=0; i<strNumber.length; i++) {
        newNumber += strNumber[strNumber.length-1-i];
    }
    return newNumber;
}
console.log(reverseNumber(32243));


/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
All lower case letters.
*/

function isPalindrome(str) {
    var newStr = '';
    for(var i=0; i<str.length; i++) {
        if(str[i] !== ' ') {
            newStr += str[i];
        }
    }
    var half = newStr.length;
    for (var i = 0; i < half/2; i++) {
        if (newStr[i] !== newStr[half - 1 - i]) {
            return false;
        }
        return true;
    }
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('nurses run'));
console.log(isPalindrome('jedan vrlo glup string'));

/*
3. Write a JavaScript function that generates all combinations of a string. 
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/

//d, d+o, d+o+g,
//o, o+g,
//g

function stringCombos(str) {
    var combo = [];
    for(var i=0; i<str.length; i++) {
        var result = '';
        for(var j=i; j<str.length; j++) {
            result += str[j]
            combo[combo.length] = result;
        }
    }
    return combo;
}
console.log(stringCombos('dog'));
console.log(stringCombos('baksuz'));

/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

function alphabeticalOrder(str) {
    var index = [];
    var newStr = '';
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(var i=0; i<str.length; i++) {
        for(var j=0; j<alphabet.length; j++) {
            if (str[i] === alphabet[j]) {
                index[index.length] = j;
            }
        }
    }
    console.log(index);//22,4,1,12,0,18,19,4,17

    var index = [22, 4, 1, 12, 0, 18, 19, 4, 17];
    for(var x=0; x<index.length; x++) {
        for(var t=x; t<index.length; t++) {
            if(index[x]>index[t]){            
                var swap = index[x];         
                index[x] = index[t];           
                index[t] = swap;              
            }
        }
    }
    console.log(index);//0,1,4,4,12,17,18,19,22

    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var str = 'webmaster';
    var index = [0,1,4,4,12,17,18,19,22];
    var newStr = '';
    for(var y=0; y<index.length; y++) {
        var k = index[y];
        newStr += alphabet[k];
    }
    console.log(newStr);//'abeemrstw'
    return newStr;
}
console.log(alphabeticalOrder('webmaster'));
/*
5. Write a JavaScript function that accepts a string as a parameter 
and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

function firstLetterToUpper(str) {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
    var ALPHABET = ["A","B","C","D","E","F","G","H","I","J","k","l","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];
    var index = [];
    for(var i=0; i<str.length; i++) {
        for(var j=0; j<alphabet.length; j++) {
            if (str[i] === alphabet[j]) {
                index[index.length] = j;
            }
        }
    // index = [19,7,4,26,16,20,8,2,10,26,1,17,14,22,13,26,5,14,23]
    }
    var prvoSlovoIndex = index[0];
    var newStr = ALPHABET[prvoSlovoIndex];
    for(var i=1; i<index.length; i++) {
        if(index[i-1]===26) {
            var k = index[i];
            newStr += ALPHABET[k];
        } else {
            newStr += str[i];
        }
    } 
    return newStr;
}
console.log(firstLetterToUpper('the quick brown fox'));



/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function longestWordInString(str) {
    var newStr = '';
    var words = [];
    for(var i=0; i<str.length; i++) {
        if(str[i]!==' ') {
            newStr += str[i];
        } else {
            words[words.length] = newStr;
            newStr = '';
        }
    }
    words[words.length] = newStr;

    var max = words[0];
    for(var y=0; y<words.length; y++) {
        if(words[y].length>max.length) {
           var max = words[y];
        }
    }
    return max;
}
console.log(longestWordInString('Web Development Tutorial'));

/*
7. Write a JavaScript function that accepts a string as a parameter 
and counts the number of vowels within the string. 
Note : As the letter 'y' can be regarded as both a vowel and a consonant, 
we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/

function countVowels(str) {
    var letters = ["a","A","e","E","i","I","o","O","u","U"];
    var counter = 0;
    for(var i=0; i<letters.length; i++) {
        for(var y=0; y<str.length; y++) {
            if(letters[i]===str[y]) {
                counter++;
            }
        }
    }
    return counter;
}
console.log(countVowels("The quick brown fox"));

/*
8. Write a JavaScript function that accepts a number as a parameter 
and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 
that has no positive divisors other than 1 and itself.
*/

function isPrime(number) {
    var counter = 0;
    for(var i=2; i<number-1; i++) {
        if(number%i===0) {
            counter ++;
        }
    }
    if(counter>0) {
        return false;
    } else {
        return true;
    }
}
console.log(isPrime(15));

/*
9. Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: 
object, boolean, function, number, string, and undefined.
*/

function dataType(arg) {
    var options = ["object","boolean","function","number","string","undefined"];
    for(var i=0; i<options.length; i++) {
        if(typeof arg === options[i]) {
            return options[i];
        }
    }
}
console.log(dataType(23));
console.log(dataType('nesto nesto'));
console.log(dataType([[],[],[]]));

/*
10. Write a JavaScript function which returns 
the n rows by n columns identity matrix.
n=3
1 0 0
0 1 0
0 0 1
*/

function myFunc(n) {
    var rows = '';
    for (var i=0; i<n; i++) {
        var str = '';
        for (var j=0; j<n; j++) {
            if(i===j) {
                str += "1 ";
            } else {
                str += "0 ";
            }
        }
        rows += str + "\n";
        
    }
    return rows;
}
console.log(myFunc(5));

/*
11. Write a JavaScript function which will take an array of numbers 
stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

function secondMinMax(arr) {
    var min, max = arr[0];
    var indexMin, indexMax = 0;
    var newArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]<min) {
            min=arr[i];
            indexMin=i;
        } else if(arr[i]>max) {
            max = arr[i];
            indexMax = i;
        } else {
            min = max = arr[i];
            indexMin = indexMax = i;
        }
    }
    //console.log(min, max);
    for(var x=0; x<arr.length; x++) {
        if(arr[x]!==max && arr[x]!==min) {
            newArr[newArr.length] = arr[x]; 
        }
    }
    //console.log(newArr);

    var min2 = newArr[0];
    var max2 = newArr[0];
    for(var j=0; j<newArr.length; j++) {
        if(newArr[j]<=min2) {
            min2=newArr[j];
        }
        if(newArr[j]>=max2) {
            max2=newArr[j];
        }
    }
    //console.log(min2,max2);
    return [min2,max2]; // pokazivalo je samo drugu vrednost kad nema zagrade, i kd stavim samo obicnu zagradu! Pokazuje obe vrednosti samo u nizu!
}
console.log(secondMinMax([1,2,3,4,5]));

/*
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia : In number theory, a perfect number is a positive integer 
that is equal to the sum of its proper positive divisors, that is, 
the sum of its positive divisors excluding the number itself (also known as its aliquot sum). 
Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, 
and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: 
( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
This is followed by the perfect numbers 496 and 8128.

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
13. Write a JavaScript function to compute the factors of a positive integer.
*svi brojevi sa kojima je taj broj deljiv
*/

function factors(number) {
    var arr = [];
    for(var i=1; i<number+1; i++) {
        if(number%i===0) {
            arr[arr.length] = i;
        }
    }
    return arr;
}
console.log(factors(17));
console.log(factors(6));

/*
14. Write a JavaScript function to convert an amount to coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
*/

function amountToCoins(amount, coins) {
    

    for(var x=0; x<coins.length; x++) {
        for(var t=x; t<coins.length; t++) {
            if(coins[x]<coins[t]){            
                var swap = coins[x];         
                coins[x] = coins[t];           
                coins[t] = swap;              
            }
        }
    }
    //console.log(coins); [ 25, 10, 5, 2, 1 ]

    
    var result =[];
    for(var i=0; i<coins.length; i++) {
        var ceoBr = parseInt(amount/coins[i]);
        for(var j=0; j<ceoBr; j++) {
            result[result.length] = coins[i];
        }
        var ostatak = amount%coins[i];
        amount = ostatak;
        //console.log(items, ceoBr, ostatak);
    }
    return result;
}
console.log(amountToCoins(66, [25,10,5,2,1]));

/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
Accept b and n from the user and display the result. 2,3 --> 8
*/

function computeBN(b,n) {
    var result = 1;
    for (var i =1; i <= n; i++){
        result = b * result;        
    }
    return result;
}
console.log(computeBN(2, 3));

/*
16. Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/



/*
17. Write a JavaScript function to  get the number of occurrences 
of each letter in specified string.
*/



/*
18. Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller 
and smaller chunks until it finds the desired value.

*/



/*
19. Write a JavaScript function that returns array elements larger than a number. 

*/



/*
20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/



/*
21. Write a JavaScript function to get all possible subset with a fixed length 
(for example 2) combinations in an array. 
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
*/



/*
22. Write a JavaScript function that accepts two arguments, 
a string and a letter and the function will count the number of occurrences 
of the specified letter within the string. 
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/
 


/*
23. Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/



/*
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, 
comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/



/*
25. Write a JavaScript function that accept a list of country names 
as input and returns the longest country name as output. 
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/



/*
26. Write a JavaScript function to find longest substring 
in a given a string without repeating characters. 
*/



/*
27. Write a JavaScript function that returns the longest palindrome in a given string. 

Note: According to Wikipedia "In computer science, the longest palindromic substring 
or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring 
of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". 
The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra",
 there is no palindromic substring with length greater than three, 
 but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings 
(that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) 
rather than returning only one substring or returning the maximum length of a palindromic substring.

*/



/*
28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
*/



/*
29. Write a JavaScript function to get the function name.
*/



/*primeri iz testa:
console.log(parseInt("ab345ab"));
function f(a,b) {
    return a+b;
}
console.log(f(12));

var m = '';
var n = 4;
while(n>=0) {
    m += '*';
    n--;
}
console.log(m);

var sum=0;
for(i=0; i<5;i++) {
    sum += i;
    console.log(sum);
}

function m(a,b) {
    var result;
    result=a*b;
    return result;
}
var product;
product = m(4);
console.log(product);

var a = [2,15,18,-4,2];
var result = a[0];
for(i=1; i<a.length; i++) {
    if(a[i]>result) {
        result=a[i];
    }
}
console.log(result);

var a = [2,15,18,-4,2];
a.length = 2;
console.log(a);

function m(a) {
    for(i=0,j=a.length-1;i<j; i++,j--){
        var tmp = a[i];
        a[i]=a[j];
        a[j]=tmp;
    }
    return a;
}
console.log(m(["3", 4,2,true,-2]));

var result;
var n;
n = 14;
switch (n) {
    case 2:   
        result =1;
        break;
    case 4: 
        result=2;
    case 6:    
        result=3;
        break;
    default:    
        result = 100;    
}
console.log(result);

for(var i=1; i<6; i++) {
    if (i==3 || i==4) {
        break;
    }
    console.log(i);
}

for(var i=0; i<10; i+=2) {
    
    console.log(i);
}

var a=[];
for(var i=0; i<4; i++) {
    a[2*i] = i;
    a[2*i+1] =i;
}
console.log(a);

var sum=0;
for(var i=4; i<8; i=i+1) {
    sum += i;
    console.log(sum);
}

var s = "coffee";
s[0] = "C";
console.log(s);

var n = 10;
console.log(++n);

var result = 0%2===0;
console.log(result);

function m(a,b) {
    return 1+a+b;
}
var product;
product = m(4,5,32,11);
console.log(product);

function m(a,b) {
    var result;
    return result;
    result = a*b;
}
var product;
product = m(4,5);
console.log(product);

var d = "Do the magic"
var s='';
    for(i=d.length-1;i>=0;i--){
        s=s+d[i];
    }
console.log(s);

var n = 23;
n -=2;
console.log(n);

var sum = 0;
for(i=0;i<10; i++){
    if(i==6) {
        continue;
    }
    if(i%3==0) {
        sum++
    }
}
console.log(sum);

var s="abc";
console.log(s+s);

var a = true;
var b = false;
console.log(a && b);
console.log(!a);

for(var i=0; i<5;) {
    console.log("*");
}

function f() {};
var result;
result= f();
console.log(result);*/

