var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el){
  newArr = [el, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr, el) {
  newArr = [...arr, el];
  return newArr;
 
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.slice(1);
  return newArr;
}


function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var newArr = arr.slice(0, arr.length -1);
  return newArr;
}


function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}






