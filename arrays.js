
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
  [element, ...arr]
  return [element, ...arr];
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
};

function addElementToEndOfArray(arr,e){
  [...arr, e]
  return [...arr, e];
};

function destructivelyAddElementToEndOfArray(arr,e) {
  arr.push(e)
  return arr;
};

function accessElementInArray(array, index) {
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
};

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
};

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
};

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
};
