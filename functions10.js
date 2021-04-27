/*
Write a function that checks if a given string contains digit 5.

Input: “1b895abd” 
Output: true

Input: “1bser9re”
Output: false
*/

function containsFive(str) {
  var counter = 0;
  for(var i=0; i<str.length; i++) {
		if(str[i]==="5") {
			return true;
		} else {
      return false;
    }
	}
}
console.log(containsFive("1bser9re"));

/*
Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
*/

function replaceJS(str) {
	var newStr = '';
	
	for(var i=0; i<str.length; i++){
		if(str[i]==="J" && str[i+1]==="S") {
          newStr += "**";
          i++;
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}

console.log(replaceJS("Programming in JS is super interesting!"));

/*
Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” 
*/

function insertCharacter(str, position, character) {
  var newStr = '';
  for(var i=0; i<str.length; i++) {
    if(i===position-1) {
      newStr += character + str[i];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(insertCharacter("Goo morning", 4, "d"));

/*
Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!” 
 */

function deleteCharacter(str, position) {
  var newStr = '';
  for(var i=0; i<str.length; i++) {
    if(i===position) {
      continue;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(deleteCharacter("Goodd morning", 3));


/*
Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]
*/

function deleteEverySecondEl(arr) {
  var newArr = [];
  for(var i=0; i<arr.length; i++) {
    if(i%2!==0) {
      continue;
    } else {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(deleteEverySecondEl([3, 5, 1, 8, 90, -4, 23, 1, 67]));

/*
Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/

function elementReplacement(arr, position1, position2) {
  var newArr = [];
  for(var i=0; i<arr.length; i++) {
    if(i>=position1 && i<=position2) {
      newArr[newArr.length] = arr[i]*2;
    } else {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(elementReplacement([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));


/*
Write a function that checks if a given object has a given property with the given value. 
Input: {x: 20, y: 30}, “x”, 20 
Output: true

Input: {x: 20, y: 30}, “z”, 20 
Output: false 

Input: {x: 20, y: 30}, “x”, 10 
Output: false
*/

function nismoJosRadiliObjektePaSamStavilaArr(arr, property, value) {
  for(var i=0; i<arr.length; i++) {
    if(arr.includes(property) && arr.includes(value)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(nismoJosRadiliObjektePaSamStavilaArr(["x", 20, "y", 30], "x", 20));

/*
Write a function that checks if every element of the first array is contained in the second array. 
Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/

function checkElement(arr1, arr2) {
  var counter = 0;
  for(var i=0; i<arr1.length; i++) {
    for(var j=0; j<arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        counter++;
        arr2[j] = undefined;
      }
    }
  }
  if(counter===arr1.length) {
    return true;
  } else {
    return false;
  }
}
console.log(checkElement([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

/*
Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
*/
function numberOfAa(str) {
  var counter = 0;
  for(var i=0; i<str.length; i++) {
    if(str[i]==="a" || str[i]==="A") {
      counter++;
    }
  }
  return counter;
}
//console.log(numberOfAa("tea"));

function sortStr(arr) {
  var swamp;
  for(var i=0; i<arr.length; i++) {
    for(var j=i+1; j<arr.length; j++) {
      //console.log(arr);
      if(numberOfAa(arr[i]) > numberOfAa(arr[j])) {
        swamp = arr[i];
        arr[i] = arr[j];
        arr[j] = swamp;
  
      }
    }
  }
  return arr;
}
console.log(sortStr(["apple","tea","amazing","morning","JavaScript"]));

/*
Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. 
*/

function nextDate(date) {
  var elements = date.split('. ');
  var newYear = parseInt(elements[2]);
  var newMonth = parseInt(elements[1])
  var newDay = parseInt(elements[0]);
  
  if((parseInt(elements[1]) === 1) || (parseInt(elements[1]) === 3) || (parseInt(elements[1]) === 5) || (parseInt(elements[1]) === 7) || (parseInt(elements[1]) === 8) || (parseInt(elements[1]) === 10)) {
    if(parseInt(elements[0])===31) {
      newDay = 1;
      newMonth = parseInt(elements[1]) +1;
    } else {
      newDay = parseInt(elements[0])+1;
    }
  }
  else if((parseInt(elements[1]) === 12) && parseInt(elements[0])===31) {
    newDay = 1;
    newMonth = 1;
    newYear = parseInt(elements[2])+1;
  }

  else if((parseInt(elements[1]) === 4) || (parseInt(elements[1]) === 6) || (parseInt(elements[1]) === 9) || (parseInt(elements[1]) === 11)) {
    if(parseInt(elements[0])===30) {
      newDay = 1;
      newMonth = parseInt(elements[1])+1;
    } else {
      newDay = parseInt(elements[0])+1;
    }
  }
  else if(parseInt(elements[1]) === 2) {
      if((parseInt(elements[2])%4===0)) {
        if((parseInt(elements[0])===29)) {
          newDay = 1;
          newMonth = parseInt(elements[1]) +1;
        } else {
          newDay = parseInt(elements[0]) +1;
        }
        
      } else if(parseInt(elements[0])===28) {
        newDay = 1;
        newMonth = parseInt(elements[1]) +1;
      } else {
        newDay = parseInt(elements[0])+1;
      }
  } 
  return newDay + '. ' + newMonth + '. ' + newYear + '.';
}
console.log(nextDate('30. 1. 2024.'));
console.log(nextDate('31. 1. 2024.'));
console.log(nextDate('28. 2. 2024.'));
console.log(nextDate('29. 2. 2024.'));
console.log(nextDate('28. 2. 2025.'));
console.log(nextDate('31. 12. 2024.'));

/*
Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. 
*/

function previousDate(date) {
  var elements = date.split('. ');
  var newYear = parseInt(elements[2]);
  var newMonth = parseInt(elements[1])
  var newDay = parseInt(elements[0]);
  
  if((parseInt(elements[1]) === 12) || (parseInt(elements[1]) === 5) || (parseInt(elements[1]) === 7) || (parseInt(elements[1]) === 8) || (parseInt(elements[1]) === 10)) {
    if(parseInt(elements[0])===1) {
      newDay = 30;
      newMonth = parseInt(elements[1]) -1;
    } else {
      newDay = parseInt(elements[0])-1;
    }
  }
  else if(parseInt(elements[1]) === 1) { 
    if(parseInt(elements[0])===1) {
      newDay = 31;
      newMonth = 12;
      newYear = parseInt(elements[2])-1;
    } else {
      newDay = parseInt(elements[0])-1;
    }   
  }
  else if((parseInt(elements[1]) === 2) || (parseInt(elements[1]) === 4) || (parseInt(elements[1]) === 6) || (parseInt(elements[1]) === 9) || (parseInt(elements[1]) === 11)) {
    if(parseInt(elements[0])===1) {
      newDay = 31;
      newMonth = parseInt(elements[1])-1;
    } else {
      newDay = parseInt(elements[0])-1;
    }
  }
  else if(parseInt(elements[1]) === 3) {
    if((parseInt(elements[2])%4===0)) {
      if((parseInt(elements[0])===1 )) {
        newDay = 29;
        newMonth = parseInt(elements[1]) -1;
      } else {
        newDay = parseInt(elements[0]) -1;
      }      
    } else if(parseInt(elements[0])===1) {
      newDay = 28;
      newMonth = parseInt(elements[1]) -1;
    } else {
      newDay = parseInt(elements[0])-1;
    }
  } 
  return newDay + '. ' + newMonth + '. ' + newYear + '.';
}
console.log(previousDate('1. 1. 2024.'));
console.log(previousDate('1. 3. 2024.'));
console.log(previousDate('29. 2. 2024.'));
console.log(previousDate('1. 3. 2025.'));
console.log(previousDate('28. 2. 2025.'));
console.log(previousDate('11. 11. 2024.'));

/*
Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
  78
 111  
   4
4321
*/

function rightAlignedArr(arr) {
  var newArr = [];
  for(var i=0; i<arr.length; i++) {
    newArr[newArr.length] = arr[i]+'';
  }
  //console.log(newArr);
  var max = 0;
  for(var i=0; i<newArr.length; i++) {
    if(newArr[i].length >= max) {
      max = newArr[i].length;     
    }
  }
  //console.log(max);
  var result = [];
  for(var i=0; i<newArr.length; i++) {
    if(newArr[i].length<max) {
      var razmak = '';
      for(var j=0; j<max-newArr[i].length; j++) {
        razmak += ' ';
      }
      result += razmak + newArr[i] + '\n';
    } else {
      result += newArr[i] + "\n";
    }
  }
  return result;
}
console.log(rightAlignedArr([78, 111, 555555, 4, 4321]));