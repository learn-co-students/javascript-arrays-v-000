function addElementToBeginningOfArray(array,element) {
  x = array;
  x.unshift(element);
  return x;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift(1);
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop(0, array.length - 1);
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1);
}

function chocolateBars() {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

function addElementToEndOfArray(array, element) {
  x = array
  x.push(element);
  return x;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
