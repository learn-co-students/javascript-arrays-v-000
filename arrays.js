var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (a, b) => {
 var c = [b, ...a]
 return c
}

var destructivelyAddElementToBeginningOfArray = (a, b) => {
  a.unshift(b)
  return a
}

var addElementToEndOfArray = (a, b) => {
  var c = [...a, b]
  return c
}

var destructivelyAddElementToEndOfArray = (a, b) => {
  a.push(b)
  return a
}

var accessElementInArray = (a, b) => {
  return a[b]
}

var destructivelyRemoveElementFromBeginningOfArray = (a) => {
  a.shift()
  return a
}

var removeElementFromBeginningOfArray = (a) => {
  c = a.slice(1)
  return c
}

var destructivelyRemoveElementFromEndOfArray = (a) => {
  a.pop()
  return a
}

var removeElementFromEndOfArray = (a) => {
  c = a.slice(0, -1)
  return c
}
