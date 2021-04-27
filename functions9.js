/*
IIFE = Immediately Invoked Function Expressions

Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4]
*/

( function(arr) {
	var swamp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length-1] = swamp;
	console.log (arr);
}) ([4,5,11,9]);



/*
Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 
*/

( function(a,b) {
	console.log(a*b);
}) (4,5);
 
/*
Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
*/

( function(str) {
	var newStr = '';
	var counter = 0;
	for(var i=0; i<str.length; i++){
		if(str[i]==="m" || str[i]==="M") {
			counter++;
			newStr += "*";
		} else {
			newStr += str[i];
		}
	}
	console.log(newStr, counter);
}) ("prograMming");

/*
Write a function with parameters name and surname that returns a function 
that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com
*/

function a(name, surname) {
	return function () {
		return name+"."+surname+"@gmail.com";
	}
}
console.log(a('pera','peric')());

/*
Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/

function a(str) {
	return function () {
		return (parseInt(str,8));
	} 
}
console.log(a('034')());

/*
Write a function that checks if a given string is valid password. 
The password is valid if it is at least 6 characters long and contains at least one digit. 
The function should receive two callbacks named successCallback and errorCallback 
that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

Input: JSGuru123
Output: Your password is cool! 
*/

function successCallback() {
	return "Your password is cool!";
}

function errorCallback() {
	return "Your password is invalid!";
}

function isValidPassword(str) {
	var counter = 0;
	var arr = [0,1,2,3,4,5,6,7,8,9];
	for(var i=0; i<str.length; i++) {
		if(arr.includes(parseInt(str[i]))) {
			counter++;
		}
	}
	if(str.length>=6 && counter>=1) {
		return successCallback();
	} else {
		return errorCallback();
	}
}

console.log(isValidPassword("JSGuru"));

/*
Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/

function isOdd(number) {
	if(number%2!==0) {
		return true;
	} else {
		return false;
	}
}

function arrFilter(arr) {
	var newArr = [];
	for(var i=0; i<arr.length; i++) {
		if(isOdd(arr[i])) {
			newArr[newArr.length] = arr[i];
		}
	}
	return newArr;
}

console.log(arrFilter([2, 8, 11, 4, 9, 3]));