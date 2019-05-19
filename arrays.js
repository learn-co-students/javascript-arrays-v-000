// var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
//
//
// function addElementToBeginningOfArray(array, element) {
//   return [element, ...array]
// }
//
// function destructivelyAddElementToBeginningOfArray(array, element) {
//   array.unshift(element)
//
//   return array
// }
//
// function addElementToEndOfArray(array, element) {
//   return [...array, element]
// }
//
// function destructivelyAddElementToEndOfArray(array, element) {
//   array.push(element)
//
//   return array
// }
//
// function accessElementInArray(array, index) {
//   return array[index]
// }
//
// function destructivelyRemoveElementFromBeginningOfArray(array) {
//   array.shift()
//
//   return array
// }
//
// function removeElementFromBeginningOfArray(array) {
//   return array.slice(1)
// }
//
// function destructivelyRemoveElementFromEndOfArray(array) {
//   array.pop()
//
//   return array
// }
//
// function removeElementFromEndOfArray(array) {
//   return array.slice(0, array.length - 1)
// }

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, el){
  var newarr = [el, ...arr]

  return newarr
}

function destructivelyAddElementToBeginningOfArray(arr, el){
  arr.unshift(el)

  return arr
}

function addElementToEndOfArray(arr, el){
   return [...arr, el]
}

function destructivelyAddElementToEndOfArray(arr, el){
  arr.push(el)

  return arr
}

function accessElementInArray(arr, idx){
  return arr[idx]
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()

  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
