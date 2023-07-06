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

gfx.setStrokeColor = function(color){
  gfx.context.strokeStyle = color;
}

gfx.setFillColor = function(color){
  gfx.context.fillStyle = color;
}

gfx.getCanvas = function(){
  return gfx.canvas;
}

gfx.getContext = function(){
  return gfx.context;
}

gfx.drawCircle = function(x, y, radius, fill=true){
  let context = gfx.getContext();
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  if(fill){
    context.fill();
  }
  else{
    context.stroke();
  }
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
gfx.drawBox = function(x, y, width, height, fill){
  let context = gfx.getContext();
  gfx.getContext().rect(x, y, width, height);
  if(fill){
    context.fill();
  }
  else{
    context.stroke();
  }
}

gfx.drawText = function(text, x, y, font = "20px monospace"){
  let context = gfx.getContext()
  context.font = font;
  context.fillText(text, x, y);
}

gfx.drawImage = function(imagePath, x, y){
  var img = document.createElement("img");
  img.src = imagePath;
  gfx.getContext().drawImage(img, x, y);
}