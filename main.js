/*##############################################################################
# Main game loop
##############################################################################*/
var main = {};

//Frames Per Second. Change this for faster or slower max framerate.
main.fps = 60; 
main.startTime = Date.now();
main.frameDuration = 1000 / main.fps
main.lag = 0;

main.gameLoop = function(){
  requestAnimationFrame(main.gameLoop, gfx.getCanvas());

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
  gfx.initContext();
  input.init();
}

main.main = function(){
  this.init();
  this.gameLoop();
}

main.main();