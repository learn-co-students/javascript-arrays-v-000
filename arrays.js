var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  array2 = array
  array2.unshift(element);
  return array2
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  array2 = array;
  array2.push(element);
  return array2
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromEndOfArray(array) {
  array2 = array
  array2.pop();
  return array2
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

function removeElementFromBeginningOfArray(array) {
  array2 = array
  array2.shift();
  return array
}
