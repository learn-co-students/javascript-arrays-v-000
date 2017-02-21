var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, el){
  var newArray = array 
  newArray.unshift(el)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, el){
  var array = array 
  return array.unshift(el)
}

function addElementToEndOfArray(array,el){
  var newArray = array 
  newArray.push(el)
  return newArray
}

function destructivelyAddElementToEndOfArray(array,el){
  var array = array 
  return array.push(el)
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementInArray(array, index){
  return array.shift(index)
}

function removeElementFromBeginningOfArray(array){
  var array_result = array.shift
  return array_result
}

function removeElementFromEndOfArray(array){
  return array.unshift
}