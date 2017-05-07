var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element) {
chocolateBars = ["foo", ...chocolateBars];
return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift("foo");
  return chocolateBars;
}
// END OF ARRAYS
function addElementToEndOfArray(chocolateBars , element) {
  chocolateBars = [...chocolateBars, "foo"];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  chocolateBars.push("foo");
  return chocolateBars;
}

// Access array element
function accessElementInArray(chocolateBars, index) {
  return(chocolateBars[3], 3);
}

//Remove elements from beginning

function removeElementFromBeginningOfArray(chocolateBars, element) {
  chocolateBars.shift();
  return chocolateBars;
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, element) {
  chocolateBars.shift();
  return chocolateBars;
}

// remove elements from end

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.slice(0, chocolateBars.length - 1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  
  chocolateBars.pop();
  return chocolateBars;
}
