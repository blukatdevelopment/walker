/*##############################################################################
# Utilities
##############################################################################*/
var util = {};

util.randRange = function(min, max){
  return Math.random() * (max - min) + min;
}

util.isInsideBox = function(topLeft, bottomRight, point){
  if(point === null){
    return false;
  }
  var inX = point.x < bottomRight.x && point.x > topLeft.x;
  var inY = point.y < bottomRight.y && point.y > topLeft.y;
  return inX && inY;  
}