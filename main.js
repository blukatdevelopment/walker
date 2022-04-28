/*##############################################################################
# Scene management
##############################################################################*/
var scene = {};
scene.GAME_SCENE = "game";
scene.activeScene = scene.GAME_SCENE;

scene.getScene = function(){
  switch(this.activeScene){
    case scene.GAME_SCENE:
      return game;
      break;
  }
}

scene.update = function(){
  scene.getScene().update();
}

scene.mouseDown = function(evt){
  scene.getScene().mouseDown(evt);
}

scene.mouseUp = function(evt){
  scene.getScene().mouseDown(evt);
}

/*##############################################################################
# Util
##############################################################################*/

function randRange(min, max){
  return Math.random() * (max - min) + min;
}

function isInsideBox(topLeft, bottomRight, point){
  if(point === null){
    return false;
  }
  var inX = point.x < bottomRight.x && point.x > topLeft.x;
  var inY = point.y < bottomRight.y && point.y > topLeft.y;
  return inX && inY;  
}

/*##############################################################################
# SFX
##############################################################################*/
const SFX_PEW = "pew.mp3",
SFX_IMPACT = "impact.mp3",
SFX_EXPLOSION = "explosion.mp3";

function playSound(file){
  var audio = new Audio(file);
  audio.play();
}

/*##############################################################################
# Main
##############################################################################*/
var main = {};
main.SCREEN_MIN = 0;
main.SCREEN_MAX = 400;

main.fps = 60;
main.startTime = Date.now();
main.frameDuration = 1000 / main.fps
main.lag = 0;

main.gameLoop = function(){
  requestAnimationFrame(main.gameLoop, getCanvas());

  var current_time = Date.now();
  var elapsed = current_time - main.startTime;
  main.startTime = current_time;
  main.lag = elapsed;
  while(main.lag >= main.frameDuration){
    scene.update();
    main.lag -= main.frameDuration;
  }
}

main.init = function(){
  initContext();
  input.init();
}

main.main = function(){
  this.init();
  this.gameLoop();
}

main.main();