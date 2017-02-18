

function chocolateBars(array) {

}

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array] 
  return newArray 
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element] 
  return newArray 
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}






 //  8) arrays removeElementFromBeginningOfArray(array) removes the first element from the `array`:
 //     AssertionError: expected undefined to deeply equal [ 2, 3 ]
 //      at Context.it (test/arrays-test.js:83:63)

 //  9) arrays removeElementFromEndOfArray(array) removes the last element from the `array`:
 //     AssertionError: expected undefined to deeply equal [ 1, 2 ]
 //      at Context.it (test/arrays-test.js:89:57)