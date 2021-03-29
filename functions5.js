/*
Find the min and max element in the following array and switch their places. 
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function switchMinMax(arr) {
    var result = [];
    var min = arr[0];
    var max = arr[0];
    minIndex = 0;
    maxIndex = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] <= min) {
            min = arr[i];
            minIndex = i;
        } else if(arr[i] >= max) {
            max = arr[i];
            maxIndex = i;
        }
    }
    for(var j=0; j<arr.length; j++) {
        if(arr[j] !== min && arr[j] !== max) {
            result[j] = arr[j];
        } else if(arr[j] === min) {
            result[maxIndex] = arr[j];
        } else if(arr[j] === max) {
            result[minIndex] = arr[j];
        }
    }
    return result;
}
var a = [3, 500, 12, 149, 53, 414, 1, 19];
console.log(switchMinMax(a));

/*
Use the following array to make a new one by dividing its values by two and adding 5. 
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function createNewArr(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++) {
        newArr[i] = (arr[i]/2)+5;
        if(newArr[i] === 0) {
            newArr[i] = 20;
        }
    }
    return newArr;
}
var a = [3, 500, -10, 149, 53, 414, 1, 19];
console.log(createNewArr(a));

/*
Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

function studentsGrade(names, points) {
    var result = '';
    for(var i=0; i<points.length; i++) {
        if(points[i] <= 50) {
            result += names[i] + ' aquired ' + points[i] + ' points and failed to complete the exam.\n';
        } else if(points[i] <= 60 && points[i]>50) {
            result += names[i] + ' aquired ' + points[i] + ' points and earned ' + 6 +'\n';
        } else if(points[i] <= 70 && points[i]>60) {
            result += names[i] + ' aquired ' + points[i] + ' points and earned ' + 7 + '\n';
        } else if(points[i] <= 80 && points[i]>70) {
            result += names[i] + ' aquired ' + points[i] + ' points and earned ' + 8 + '\n';
        } else if(points[i] <= 90 && points[i]>80) {
            result += names[i] + ' aquired ' + points[i] + ' points and earned ' + 9 + '\n';
        } else if(points[i] <= 100 && points[i]>90) {
            result += names[i] + ' aquired ' + points[i] + ' points and earned ' + 10 + '\n';
        } else {
            result += "There is a mistake in the calculation.\n";
        }
    }
    return result;
}
var a = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"]; 
var b = [50, 39, 63, 72, 99, 51, 83, 59];
console.log(studentsGrade(a,b));

/*
Sort a previously defined array. 
Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/

function sortedDoubleValues(arr) {
    var newArr = [];
    for(var i =0;i<arr.length;i++) {        //
        for(var j= i+1;j<arr.length;j++){   //
            if(arr[i]>arr[j]){              // zamenim mesta elementima posto ih uporedim
                var swap = arr[i];          //
                arr[i] = arr[j];            //
                arr[j] = swap;              //
            }
        }
    }

    for(var z=0; z<arr.length; z++) {   //
        newArr[z] = arr[z]*2;           // pravim duplirani array od sredjenog (sort) array-a
    }                                   //

    return newArr; // vracam novi array
}
var a = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
console.log(sortedDoubleValues(a));

/*
Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/

function descendingArray(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++) {       
        for(var j=i+1; j<arr.length; j++){   //
            if(arr[i]>arr[j]){              // 
                var swap = arr[i];          //
                arr[i] = arr[j];            // zamenjujem mesta elementima pose uporedjivanja
                arr[j] = swap;              //
            }                               //
        }                                   //
    }

    for(var x=0; x<arr.length; x++) {
        newArr[x] = arr[arr.length-1-x];
    }
    return newArr;
}
var a = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
console.log(descendingArray(a));

/*
Write a program that uses a loop to add all the even numbers from 1 to 1000 
and subtracts all the odd numbers 1 to 500 from the calculated sum. 
The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

function addEvenSubstractOddMultiply() {
    var odsuma, suma = 0;
    for(var i=0; i<=1000; i++) {
        if(i%2===0) {
            suma += i;
        }
    }
    for(var j=0; j<=500; j++) {
        if(j%2!==0) {
            suma -= j;
        }
    }
    var result = suma * 12.5;
    return result;
}

console.log(addEvenSubstractOddMultiply());

/*
Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array 
and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa
*/

function twoLettersString(arr) {
    var newString = '';
    for(var i=0; i<arr.length; i++) {
        if(typeof arr[i] === 'string' && arr[i].length >= 2) {
            newString += arr[i][0] + arr[i][1];
        }
    }
    return newString;
}
var a = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
console.log(twoLettersString(a));

/*
Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

function reversedString(str) {
    var result = '';
        for(var j=str.length-1; j>=0; j--) {
            result += str[j];
        }
    return result;
}
var a = 'Belgrade Institute of Technology';
console.log(reversedString(a));

/*Write a program that displays all the combinations of two numbers between 1 and 7. 
Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. 
(E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/



/*Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
*/


/*
Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/


/*
Write a program that calculates the greatest common divisor of two integers. 
Note: The greatest common divisor of two non-zero integers is the greatest positive number 
that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

