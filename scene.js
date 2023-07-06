/*#########losing control of #####################################################################
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
  let key_events = input.popKeyEvents();
  // Comment this line out to check for other errors
  active.update(key_events);
}