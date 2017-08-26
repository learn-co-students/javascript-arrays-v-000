 var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

 function addElementToBeginningOfArray(arr, str) {
   return [str, ...arr];
 }

function destructivelyAddElementToBeginningOfArray(arr, str) {
  arr.unshift(str);
  return arr;
}

function addElementToEndOfArray(arr, str) {
  return [...arr, str];
}

function destructivelyAddElementToEndOfArray(arr, str) {
  arr.push(str);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var newArr =  arr.slice(0, arr.length - 1);
  return newArr;
}
