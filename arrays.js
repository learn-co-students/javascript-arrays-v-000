var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = function(x, y){
  return [y, ...x];
}

var destructivelyAddElementToBeginningOfArray = function(x , y){
  x.unshift(y);
  return x;
}

var addElementToEndOfArray = function(x, y){
  return [...x, y];
}

var destructivelyAddElementToEndOfArray = function(x , y){
  x.push(y);
  return x;
}

var accessElementInArray = function(a, i){
  return a[i];
}

var removeElementFromBeginningOfArray = function(a){
  a.shift();
  return a;
}

var removeElementFromEndOfArray = function(a){
  a.pop()
  return a;
}