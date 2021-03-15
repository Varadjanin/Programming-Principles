/*
1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
var x = 0;
var counter = 0
var e = 3;
var a = [5, -4.2, 3, 7];
while (x<a.length) {
    if (e===a[x]) {
        counter += 1;
    }
    x++
}
if (counter>0) {
    console.log("Yes.");
} else {
    console.log("No.");
}
/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
var a = [-3, 11, 5, 3.4, -8];
for (x=0; x<a.length; x++) {
    if (a[x]>0) {
        a[x] *= 2;
    }
}
console.log(a);
/*
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
var min = 0;
var index = 0;
var a = [4, 2, 2, -1, 6];
for (x=0; x<a.length; x++) {
    if (a[x]<=a[0]) {
        min = a[x];
        index = x;
    }
}
console.log("Najmanji broj je:", min, "Indeks najmanjeg broja je:", index);
/*
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/
var min = 0;
var result = 0;
var a = [4, 2, 2, -1, 6];
for (x=0; x<a.length; x++) {
    if (a[x]<=min) {
        min = a[x];
    }
}
for (x=0; x<a.length; x++) {
    if (a[x]<=result & a[x]!==min) {
        result = a[x];
    }
}
console.log(result)
/*
5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
var suma = 0;
var a = [3, 11, -5, -3, 2];
for (x=0; x<a.length; x++) {
    if (a[x]>=0) {
        suma += a[x];
    }
}
console.log(suma)
/*
6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/
var a = [2, 4, -2, 7, -2, 4, 2];
var counter = 0;
for (x=0; x<a.length; x++){
    if (a[x]===a[a.length-1-x]) {
        counter++
    }
}
if (counter === a.length) {
    console.log("The array is symmetric.");
} else {
    console.log("The array isn't symmetric");
}
/*
7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var y = 0;
var z = 0;
for (x=0; x<a.length*2; x++) {
    if (x%2===0) {
        c[x] = a[y]; 
        y++;
    } else {
        c[x] = b[z];
        z++;
    }
}
console.log(c);
/*
8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var y = 0;
for (x=0; x<a.length*2; x++) {
    if (x<a.length) {
        c[x] = a[x]; 
    } else {
        c[x] = b[y]; 
        y++;
    }
}
console.log(c);
/*
9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/
var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var c = [];
var y = 0;
for (x=0; x<a.length; x++) {
    if (a[x] !== e) {
        c[y] = a[x];
        y++;
    }
}
console.log(c);
/*
10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var b = [];
var y = 0;
b.length = a.length +1;
if (p>=a.length) {
    console.log("Error.");
} else {
    for (x=0; x<a.length; x++) {
        if (x === p) {
            b[x] = e;
            a.length++;
        } else if (x>p) {
            b[x] = a[x-1];
        } else{
            b[x] = a[x];
        }
    }
}
console.log(b);
