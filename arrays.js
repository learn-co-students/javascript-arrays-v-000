function addElementToBeginningOfArray(ary, elem) {
  list = ary
  list.unshift(elem)
  return list
}

function destructivelyAddElementToBeginningOfArray(ary, elem) {
  ary.unshift(elem)
  return ary
}

function addElementToEndOfArray(ary, elem) {
  list = ary
  list.push(elem)
  return list
}

function destructivelyAddElementToEndOfArray(ary, elem) {
  ary.push(elem)
  return ary
}

function destructivelyRemoveElementFromBeginningOfArray(ary) {
  ary.splice(0,1)
  return ary
}

function removeElementFromBeginningOfArray(ary) {
  return ary.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(ary) {
  ary.pop()
  return ary
}

function removeElementFromEndOfArray(ary) {
    hab = ary.slice(0, ary.length - 1)
    return hab
}


function accessElementInArray(ary, index) {
    return ary[index]
}

function chocolateBars(ary, index) {
  
}
