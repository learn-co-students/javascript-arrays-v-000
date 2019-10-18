var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(){
  var bodyJoints = ["foo",1];
  ["ankle",...bodyJoints]
  return bodyJoints
}
function destructivelyAddElementToBeginningOfArray(array,element){
  var myArray = array;
  myArray.unshift(element);
  return myArray;
  }
  destructivelyAddElementToBeginningOfArray([1],'foo')

function addElementToEndOfArray(array,element){
  var myEndArray = array;
  return [...myEndArray,element]
}
addElementToEndOfArray(['foo'],1)

function destructivelyAddElementToEndOfArray(array,element){
  var destructArray = array;
  destructArray.push(element);
  return destructArray;
}
destructivelyAddElementToEndOfArray([1],'foo')

function accessElementInArray(array,index){
  myArray4 = array;
  return myArray4[2];
  }
accessElementInArray(['hippy','ankle bells','sandals','petrouli','grateful dead'],2)

function removeElementFromBeginningOfArray(array){
  fireArray = array;
  return fireArray2 = fireArray.slice(1);

}
removeElementFromBeginningOfArray(['matches','lighter','friction'])

function removeElementFromEndOfArray(array){
  var shoes = array;
  return shoes.slice(0,shoes.length-1);
}
removeElementFromEndOfArray(["pumps","wedges","sneakers"])
