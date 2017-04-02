var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(arr, elm) {
  arr.unshift(elm)
  return arr;
}

function destructivelyAddElementToBeginningOfArray(ary2, element2) {
  var ary2 = ary2
  ary2.unshift(element2);
  return ary2;
}

function addElementToEndOfArray(arr, elm) {
  return [...arr, elm];
}

function destructivelyAddElementToEndOfArray(arr, elm) {
  arr.push(elm);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, -1);
}