var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
var myarray = [1];
mynewarray = ["foo", ...myarray];
return mynewarray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
var onearray = [1];
onearray = ["foo", ...onearray];
return onearray;
}

function addElementToEndOfArray(array, element) {
var anotherarray = [1];
anewarray = [...anotherarray, "foo"];
return anewarray;
}

function destructivelyAddElementToEndOfArray(array, element) {
var anotherarray = [1];
anotherarray = [...anotherarray, "foo"];
return anotherarray;
}

function accessElementInArray(array, index) {
var aarray = [1, 2, 3];
return aarray[index];
}

function removeElementFromBeginningOfArray(array) {
  var samplearray = [1, 2, 3];
  samplearray.shift();
  return samplearray;
}

function removeElementFromEndOfArray(array) {
  var asamplearray = [1, 2, 3];
  asamplearray.splice(-1);
  return asamplearray;
}
