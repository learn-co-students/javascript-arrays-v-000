 

 
var chocolateBars = ["snickers"];
 
 function addElementToBeginningOfArray(array, element) {
   var arr = array;
   arr.unshift(element);
   return arr; 
}


function destructivelyAddElementToEndOfArray(array, elements) {
	var arr = array;

	      // expect(array).to.eql(['foo', 1])
	// push elements to array at the at the beginig
	arr.push(elements);
	return arr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
	var arr = array;
	// alter the array 
	// What was passed in?
		arr.unshift(element);
		return arr;
}

 
 function addElementToEndOfArray(array,element){
 	var arr = array;
 	arr.push(element);
 	return arr;
 }
 

 function accessElementInArray(array,index) {
 	
 	return array[index]
 }


function destructivelyRemoveElementFromBeginningOfArray(array) {
	array.shift(1)
	return array;
}
      // AssertionError: expected [ 1, 2, 3 ] to deeply equal [ 2, 3 ]

function removeElementFromBeginningOfArray(array) {
	  return array.slice(0, array.length - 1)
 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()

  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}


function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

