/*##############################################################################
# Graphics library
##############################################################################*/
var gfx = {
  canvas: null,
  context: null
};

gfx.initContext = function(){
  gfx.canvas = document.getElementById("mainCanvas");
  gfx.context = gfx.canvas.getContext("2d");
  gfx.X_MIN = 0;
  gfx.Y_MIN = 0;
  gfx.X_MAX = gfx.canvas.width;
  gfx.Y_MAX = gfx.canvas.height;
}

gfx.getCanvas = function(){
  return gfx.canvas;
}

gfx.getContext = function(){
  return gfx.context;
}

gfx.drawCircle = function(x, y, radius){
  let context = gfx.getContext();
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fill();
}

gfx.drawLine = function(x1, y1, x2, y2){
  let context = gfx.getContext();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}

gfx.clear = function(){
  let context = gfx.getContext();
  let canvas = gfx.getCanvas();
  context.clearRect(0, 0, gfx.canvas.width, gfx.canvas.height);
  context.beginPath();
}

// XY is for top left corner.
gfx.drawBox = function(x, y, width, height){
  // Top
  gfx.drawLine(x, y, x+width, y);
  // Left
  gfx.drawLine(x, y, x, y+height); 
  // Bottom
  gfx.drawLine(x, y+height, x+width, y+height);
  // Right
  gfx.drawLine(x+width, y, x+width, y+height);
}

gfx.drawText = function(text, x, y){
  let context = gfx.getContext()
  context.font = "30px Arial";
  context.fillText(text, x, y);
}