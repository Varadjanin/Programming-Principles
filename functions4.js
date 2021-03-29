/*Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function inArray(e, a) {
    for(var i=0; i<a.length; i++) {
        if(a[i] === e) {
            return "Yes.";
        } else {
            return "No.";
        }
    }
}
console.log(inArray(3, [5,-4.2,3,7]));

/*
Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function doublePositives(arr) {
    for (var x=0; x<arr.length; x++) {
        if (arr[x]>0) {
            arr[x] *= 2;
        }
    }
    return arr;
}

var a = [-3, 11, 5, 3.4, -8];
console.log(doublePositives(a));

/*
Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function minElementIndex(arr) {
    result = '';
    var min = arr[0];
    var index = 0;
    for (var x=0; x<arr.length; x++) {
        if (arr[x]<=min) {
            min = arr[x];
            index = x;
        }
    }
    result = "Najmanji broj je:" + min + " Indeks najmanjeg broja je:" + index;
    return result;
}

console.log(minElementIndex([4,2,2,-1,6]));

/*
Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function secondSmallestNumber(arr) {
    var min = arr[0];
    var result = arr[0];
    for (var x=0; x<arr.length; x++) {
        if (arr[x]<=min) {
            min = arr[x];
        }
    }
    for (var y=0; y<arr.length; y++) {
        if (arr[y]<=result & arr[y]!==min) {
            result = arr[y];
        }
    } 
    return result;
}
var a = [4, 2, 2, -1, 6];
console.log(secondSmallestNumber(a));

/*
Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sumPositiveElements(arr) {
    var suma = 0;
    for (var x=0; x<arr.length; x++) {
        if (arr[x]>=0) {
            suma += arr[x];
        }
    }
    return suma;
}

var a = [3, 11, -5, -3, 2];
console.log(sumPositiveElements(a));

/*
Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/

function isArraySymmetric(arr) {
    var counter = 0;
    for (x=0; x<arr.length; x++){
        if (arr[x]===arr[arr.length-1-x]) {
            counter++
        }
    }
    if (counter === arr.length) {
        return "The array is symmetric.";
    } else {
        return "The array isn't symmetric";
    }
}
var a = [2, 4, -2, 7, -2, 4, 2];
console.log(isArraySymmetric(a));

/*
Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwineTwoArr(arr1, arr2) {
    var c = [];
    c.length = arr1.length+arr2.length;
    var y = 0;
    var z = 0;
    for (var x=0; x<arr1.length*2; x++) {
        if (x%2===0) {
            c[x] = arr1[y]; 
            y++;
        } else {
            c[x] = arr2[z];
            z++;
        }
    }
    return c;
}

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
console.log(intertwineTwoArr(a,b));

/*
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenate(arr1, arr2) {
    var c = [];
    var y = 0;
    for (var x=0; x<arr1.length+arr2.length; x++) {
        if (x<arr1.length) {
            c[x] = arr1[x]; 
        } else {
            c[x] = arr2[y]; 
            y++;
        }
    }
    return c;
}

var a = [4, 5, 6];
var b = [3, 8, 11, 9];
console.log(concatenate(a,b));

/*
Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteElement(element,arr) {
    var c = [];
    var y = 0;
    for (var x=0; x<arr.length; x++) {
        if (arr[x] !== element) {
            c[y] = arr[x];
            y++;
        }
    }
    return c;
}

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
console.log(deleteElement(e,a));

/*
Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function givenElementGivenPosition(element, position, arr) {
    var result = [];
    var y = 0;
    result.length = arr.length +1;
    if (position>=arr.length) {
        console.log("Error.");
    } else {
        for (var x=0; x<arr.length; x++) {
            if (x === position) {
                result[x] = element;
                arr.length++;
            } else if (x>position) {
                result[x] = arr[x-1];
            } else{
                result[x] = arr[x];
            }
        }
        return result;
    }
}

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
console.log(givenElementGivenPosition(e,p,a));
