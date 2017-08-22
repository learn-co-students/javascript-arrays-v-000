var chocolateBars = ["snickers", "hundred grand", "hundred grand", "skittles"];

var addElementToBeginningOfArray = (array, element) => {
  newArray = [element, ...array]
  return newArray
};


function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
};

var addElementToEndOfArray = (array, element) => {
    return [...array, element]
};

var destructivelyAddElementToEndOfArray = (array, element) => {
    array.push(element)
    return array
};

var accessElementInArray = (array, index) => {
    return array[index]
};

var destructivelyRemoveElementFromBeginningOfArray = (array) => {
    array.shift()
    return array
};

var removeElementFromBeginningOfArray = (array) => {
    newAr = array.slice(1)
    return newAr
};

var destructivelyRemoveElementFromEndOfArray = (array) => {
    array.pop()
    return array
};

var removeElementFromEndOfArray = (array) => {
    newAr = array.slice(0, array.length-1)
    return newAr
};
