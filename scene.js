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
  let active = scene.scenes[this.activeScene];
  if(active === null || typeof(active) === "undefined"){
  	console.log(scene.activeScene + " is null");
  }
  return active;
}

scene.update = function(){
  let active = scene.getScene();
  active.update();
}

scene.mouseDown = function(evt){
  let active = scene.getScene()
  active.mouseDown(evt);
}

scene.mouseUp = function(evt){
  let active = scene.getScene();
  active.mouseDown(evt);
}

scene.keyDown = function(evt){
	let active = scene.getScene();
	active.keyDown(evt);
}

scene.keyUp = function(evt){
	active = scene.getScene();
	active.keyUp(evt);
}
