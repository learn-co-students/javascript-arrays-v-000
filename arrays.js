var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, e) {
  const diffArray = [e, ...array];
  return diffArray;
}

function destructivelyAddElementToBeginningOfArray(array, e) {
  array.unshift(e);
  return array;
}

function addElementToEndOfArray(array, e) {
  const diffArray = [...array, e];
  return diffArray;
}

function destructivelyAddElementToEndOfArray(array, e) {
  array.push(e);
  return array;
}

function accessElementInArray(array, i) {
  return array[i];
}

function removeElementFromBeginningOfArray(array, e) {
  array.shift(e);
  return array;
}

function removeElementFromEndOfArray(array, e) {
  array.pop(e);
  return array;
}