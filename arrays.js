function addElementToBeginningOfArray(array, element){

return [element, ... array]

}


  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(array, element){

  array.unshift(element)

  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array){

   array.shift()
   return array
}


function addElementToEndOfArray(array, element){
  return [...array, element]
}

  function accessElementInArray(array, element) {

      return array[element]

  }

function destructivelyAddElementToEndOfArray(array, element) {
      array.push(element)
      return array
}


function destructivelyRemoveElementFromEndOfArray(array){

  array.pop()

  return array
}

function removeElementFromBeginningOfArray(array) {
    return array.splice(1)

}

function removeElementFromEndOfArray(array){

  return array.slice(0, array.length -1)

}
