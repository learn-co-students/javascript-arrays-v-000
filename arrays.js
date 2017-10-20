var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
   
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
   return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element]

}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
   return array;
}

function accessElementInArray(array, i) {
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
 var new_array = array.slice(1)
  return new_array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  //var new_array = array.slice(0, 2)
   array.pop()
   return array
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}