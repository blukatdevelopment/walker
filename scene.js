/*##############################################################################
# Scene management
##############################################################################*/
var scene = {};

// Set up this object with scene references.
scene.scenes = {
  GAME: gameScene,
  TITLE: titleScene
};
scene.activeScene = "TITLE";

scene.getScene = function(){
  return scene.scenes[this.activeScene];
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

scene.keyDown = function(evt){
	scene.getScene().keyDown(evt);
}

scene.keyUp = function(evt){
	scene.getScene().keyUp(evt);
}
