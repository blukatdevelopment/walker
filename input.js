var KEYS = {
  K_W: 87,
  K_A: 65,
  K_S: 83,
  K_D: 68,
  K_SPACE: 32
};

/*##############################################################################
# Input
##############################################################################*/
var input = {};

input.mousePos = { x: 0, y: 0};
input.getMousePosition = function(){
  return input.mousePos;
}

input.KEYS_USED = [KEYS.K_W, KEYS.K_A, KEYS.K_S, KEYS.K_D, KEYS.K_SPACE];
input.input = {
  keys: {}
};

input.onMouseMove = function(evt)
{
  var rect = gfx.getCanvas().getBoundingClientRect();
  input.mousePos = {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
input.onKeyDown = function(evt){
  if(evt.which in input.input.keys){
    input.input.keys[evt.which] = true;
  }
}
input.onKeyUp = function(evt){
  if(evt.which in input.input.keys){
    input.keys[evt.which] = false;
  }
}

input.init = function(){
  for(let i in input.KEYS_USED){
    let key = input.KEYS_USED[i];
    input.input.keys[key] = false;
  }
  var canvas = document.getElementById("mainCanvas");
  canvas.addEventListener("mousedown", scene.mouseDown);
  canvas.addEventListener("mouseup", scene.mouseUp);
  canvas.addEventListener("mousemove", input.onMouseMove);
  window.addEventListener('keydown', input.onKeyDown, false);
  window.addEventListener('keyup', input.onKeyUp, false);
}