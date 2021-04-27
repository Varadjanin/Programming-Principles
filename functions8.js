/**
* Take a look at this common scenario–you have a function that returns a value,
* which you then pass to another function. In our example, the first function,
* multiplyByTwo(), loops through passed input array, multiplies each element
* by two, and returns an array containing the result. The second function,
* addOne(), takes a value, adds one to it, and returns it
*/
function multiplyByTwo(inputArray) {
    var newArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        newArray[i] = element * 2;
    }
    return newArray;
}

function addOne(a) {
    return a + 1;
}

// Let's test these functions:
var inputOne = [1, 2, 3];
var outputArray = multiplyByTwo(inputOne);
console.log(outputArray); // [2, 4, 6]
var outputNum = addOne(100);
console.log(outputNum); // 101
    
// Now, let's say you want to have an array, myarr,
// that contains three elements, and each of the elements
// is to be passed through both functions
var inputTwo = [10, 20, 30];
var myarr = multiplyByTwo(inputTwo);
console.log(myarr);

// Now, loop through each element, passing it to addOne()
for (var i = 0; i < 3; i++) {
    myarr[i] = addOne(myarr[i]);
}
console.log(myarr); // [21, 41, 61]

// As you can see, everything works fine, but there's room for improvement.
// For example, there were two loops. Loops can be expensive if they go through
// a lot of repetitions. You can achieve the same result with only one loop.


/*
You can achieve the same result with only one loop. Your task is to modify multiplyByTwo() so that it
accepts an array and a callback function and invokes that callback on every iteration while keeping
same functionality. */

function addOne(a) {
    return a + 1;
}

function multiplyByTwo(arr, callback) {
    var newArr = [];
    for(var i=0; i<arr.length; i++) {
        var element = arr[i]*2;
        newArr[i] = callback(element);
    }
    return newArr ;
}

console.log(multiplyByTwo([1,2,3], addOne));