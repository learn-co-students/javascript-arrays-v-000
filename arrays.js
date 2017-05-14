var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,element) {
  var theArray = [element,...array]

  return theArray;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)

  return array;
}

function addElementToEndOfArray(array,element) {
  var theArray = [...array,element]
  return theArray;
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array;
}

function accessElementInArray (array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var theArray = array.slice(1)
  return theArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
