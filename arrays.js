var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var evenStrings = ["2","4","6","8","10","12","14","16","18"]
var evenNums = [2,4,6,8,10,12,14,16,18,20]
var oddNums = [1,3,5,7,9,11,13,15,17,19,21]
var oddStrings = ["1","3","5","7","9","11","13","15","17","19","21"]
var fruits = ["apple", "pear", "grape"]

function addElementToBeginningOfArray(ary1, element1) {
  return [element1, ...ary1];
}

function destructivelyAddElementToBeginningOfArray(ary2, element2) {
  var ary2 = ary2
  ary2.unshift(element2);
  return ary2;
}

function addElementToEndOfArray(ary3, element3) {
  return [...ary3, element3]
}

function destructivelyAddElementToEndOfArray(ary4, element4) {
  var ary4 = ary4
  ary4.push(element4);
  return ary4;
}

function accessElementInArray(index1, position1) {
  return index1[position1]
}

function removeElementFromBeginningOfArray(ary5) {
  ary5.shift();
  return ary5;
}

function removeElementFromEndOfArray(ary6) {
  ary6.pop();
  return ary6;
}













