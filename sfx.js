/*##############################################################################
# Sound effects and audio library
##############################################################################*/
var sfx = {};
sfx.files = {
	EXAMPLE: "sfx/example.mp3"
};

sfx.playSound = function(file){
  var audio = new Audio(file);
  audio.play();
}