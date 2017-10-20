var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element){
  return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(arr, element){
  arr.push(element)
  return arr
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element)
  return arr
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  array= arr.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  array= arr.slice(0, arr.length- 1)
  return array
}
