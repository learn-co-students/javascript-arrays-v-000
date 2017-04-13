var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, new_element) {
  return [new_element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, new_element) {
  array.unshift(new_element)
  return array
}

function addElementToEndOfArray(array, new_element) {
  return [...array, new_element]
}

function destructivelyAddElementToEndOfArray(array, new_element) {
  array.push(new_element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
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
