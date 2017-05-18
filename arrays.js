var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var diffArray = [element, ...array]
  return diffArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  var anotherArray = [...array, element]
  return anotherArray;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

function accessElementInArray (array, string) {
  return array[string];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  var diffArray = array.slice(1);
  return diffArray;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  var anotherArray = array.slice(0, array.length-1);
  return anotherArray;
}
