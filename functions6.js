
/*
Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
*/
   
function countVowels(str) {
    var counter = 0;
    for(var i=0; i<str.length; i++) {
        if(str[i]==='a' || str[i]==="A" || str[i]==="e" || str[i]==="E" || str[i]==="i" || str[i]==="I" || str[i]==="o" || str[i]==="O" || str[i]==="u" || str[i]==="U") {
            counter++;
        }
    }
    return counter;
}
console.log(countVowels("mama mia HERE I GO AGAIN my my how can I resist You"));

/*
Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/
 
function intertwineTwoArr(arr1, arr2) {
    var c = [];
    c.length = arr1.length+arr2.length;
    var y = 0;
    var z = 0;
    for (var x=0; x<c.length; x++) {
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
var a=['a','b','c'];
var b=[1,2,3];
console.log(intertwineTwoArr(a,b));


/*
Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/
 
function rotateList(arr, k) {
    var newArr = [];
    for(var i=0; i<arr.length; i++) {
        if(i>=k) {
            newArr[newArr.length] = arr[i];
        }
    }
    for(var y=0; y<k; y++) {
        newArr[newArr.length] = arr[y];
    }
    return newArr;
}
console.log(rotateList([1,2,3,4,5,6], 4));

/*
Write a function that takes a number and returns array of its digits.
*/
 
function numberToArr(number) {
    var str = '' + number;
    var arr = [];
    for (var i=0; i<str.length; i++) {
        arr[arr.length] = parseInt(str[i]);
    }
    return arr;      
}
console.log(numberToArr(12345));

/*
Write a program that prints a multiplication table for numbers up to 12.
*/
 
function multiplicationTable() {
    
    for(var i=1; i<=12; i++) {
        var arr1 = [];
        for(var j=1; j<=12; j++) {
            arr1 += j*i + ' ';
        }
        arr1 += '\n';
        console.log(arr1);
    }
}
multiplicationTable();

/*
Write a function to input temperature in Centigrade and convert to Fahrenheit.
F = (9*C/5) + 32
*/
 
function CtoF(temp) {
    var F = (9*temp/5) + 32;
    return F;
}
console.log(CtoF(35));

/*
Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/
 
function maxElement(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++) {
        if(typeof arr[i] === 'number' && !isNaN(arr[i])) {
            newArr[newArr.length] = arr[i];
        }
    }
    var max = newArr[0];
    for(var j=0; j<newArr.length; j++) {
        if(newArr[j]>=max) {
            max = newArr[j];
        }
    }
    return max;
}
console.log(maxElement([-1, -5, -100, NaN, 'kukuuuuu', -200, -45, true]));

/*
Write a function to find the maximum and minimum elements. Function returns an array.
*/
 
function maxMinElements(arr) {
    var newArr = [];
    var min = arr[0];
    var max = arr[0];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]<=min) {
            min = arr[i];
        }
        if(arr[i]>=max) {
            max = arr[i];
        }
    }
    newArr[0] = min;
    newArr[1] = max;
    return newArr;
}
console.log(maxMinElements([1,2,3,-4,5,6,7,8,9]));

/*
Write a function to find the median element of array.
Ако постоји непарна количина бројева, средња вредност је број који је у средини, 
са истом количином бројева испод и изнад. 
Ако на листи постоји паран број бројева, медијана је просек две средње вредности.
*/
 
function medianElement(arr) {
    var result = [];
    for(var i=0; i<arr.length; i++) {
        for(var j=i+1; j<arr.length; j++){   //
            if(arr[i]>arr[j]){              // zamenim mesta elementima posto ih uporedim
                var swap = arr[i];          //
                arr[i] = arr[j];            //
                arr[j] = swap;              //
            }
        }
    }
    var index = 0;
    if(arr.length%2===0) {                              //stavila sam srednje vrednosti u array
        index = arr.length/2;                          //ako treba naci prosek dva elemanta u sredini sortiranog niza
        result[result.length] = arr[index-1];           //kada je broj elemenata paran:
        result[result.length] = arr[index];            //result[result.length] = parseInt((arr[index-1]+arr[index])/2));
    } else {
        result[result.length] = arr[parseInt(arr.length/2)];
    }
    return result;
}
var a = [1, 5, 3, 6];
var b = [1,8,3];
console.log(medianElement(a));
console.log(medianElement(b));

/*
Write a function to find the element that occurs most frequently.
*/
 
function mostFrequently(arr) {
    var counter = 0;
    var max = 1;
    var element;
    for(var i=0; i<arr.length; i++) {
        for(var j=i; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                counter++
            }
            if(counter>=max) {
                max = counter;
                element = arr[i];
            }
        }
        counter = 0;
    }
    return element;
}
console.log(mostFrequently([1,2,3,4,5,5,5,6,7,8,9,9,9,9,1,1,3,3]));


/*
Write a function to find and return the first, middle and last element of an array 
if the array has odd number of elements. 
If number of elements is even, return just the first and the last. 
In other cases (empty array), input array should be returned.
*/
 
function experiment(arr) {
    var result = [];
    for(var i=0; i<arr.length; i++){
        if(arr.length%2===0) {
            result = [arr[0], arr[arr.length-1]];
        } else if(arr.length%2!==0) {
            if(arr===[]) {
                result = arr;
            } else {
            result = [arr[0], arr[parseInt(arr.length/2)], arr[arr.length-1]];
            }
        }
    }
    return result;
}
console.log(experiment([1,2,3,4,5,6]));
console.log(experiment([1,2,3,4,5,6,7]));
console.log(experiment([]));


/*
Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
*/
 
function averageElement() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    var result = sum/arguments.length;
    return result;
}

console.log(averageElement(1,2,3,4,5));
console.log(averageElement(1,2,3,4,5,6,7,8,9));

/*
Write a function to find all the numbers greater than the average.
*/
 
function greaterThanAverage() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    var average = sum/arguments.length;
    var newArr = [];
    for(var j=0; j<arguments.length; j++) {
        if(arguments[j]>average) {
            newArr[newArr.length] = arguments[j];
        }
    }
    return newArr;
}
console.log(greaterThanAverage(1,2,3,4,5,6,7,8,9));
console.log(greaterThanAverage(1,1,1,1,2,2,8,9));

/*
The body mass index (BMI) is the ratio of the weight of a person (in kilograms) 
to the square of the height (in meters). Write a function that takes two parameters, 
weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
*/
 
function bodyMassIndex(weight, height) {
    var bmi = weight/(height*height);
    if(bmi<15) {
        return "Starvation";
    } else if(bmi>=15 && bmi<17.5) {
        return "Anorexic";
    } else if(bmi>=17.5 && bmi<18.5) {
        return "Underweight";
    } else if(bmi>=18.5 && bmi<25) {
        return "Ideal";
    } else if(bmi>=25 && bmi<30) {
        return "Overwight";
    } else if(bmi>=30 && bmi<40) {
        return "Obese";
    } else {
        return "Morbidly obese";
    }
}
console.log(bodyMassIndex(65,1.75));

/*
Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/
 
function strInRectangularFrame(arr) {
    var red = '';
    var word = ' ';
    var max = 0;
    for(var x=0; x<arr.length; x++) {
        var element = arr[x];
        if(element.length>max) {
            max=element.length;
        }
    } 
    for(var i=0; i<arr.length+2; i++) {
        if (i===0 || i===arr.length+1) {
            for(var j=0; j<=max+1; j++) {
                red += "*";
            }
            red = red + '\n';
        } else {

            word = arr[i-1];
            for(var z=word.length; z<max; z++) {
                word += ' ';
            }
            red = red + '*' + word + '*' + '\n';
        }
    }
    return red;
}
var proba = strInRectangularFrame(["Hello", "World", "in", "a", "frame","jos", "nesto", "najnovije"]);
console.log(proba);


