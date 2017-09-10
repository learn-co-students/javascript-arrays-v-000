var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  var outcome = [ele, ...arr];
  return outcome;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}

function addElementToEndOfArray(arr, ele) {
  var outcome = [...arr, ele]
  return outcome;
}
function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}
function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var outcome = arr.slice(1);
  return outcome
}

function destructivelyRemoveElementFromEndOfArray(arr, ele) {
  arr.pop(ele)
  return arr
}

function removeElementFromEndOfArray(arr) {
  var outcome = arr.slice(0, arr.length - 1)
  return outcome
}
