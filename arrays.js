var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var a = array;
  var b = [element, ...a];
  return b
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  var a = array;
  var b = [...a, element]
  return b
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  console.log(array[index]);
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array) {
  var nArray = array.slice(1);
  return nArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  var nArray = array.slice(0, array.length - 1);
  return nArray
}
