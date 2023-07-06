const KEYS = {
  K_W: 87,
  K_A: 65,
  K_S: 83,
  K_D: 68,
  K_SPACE: 32,
  K_LEFT: 37,
  K_UP: 38,
  K_RIGHT: 39,
  K_DOWN: 40
};

const KEYS_INVERSE = {
  87: "K_W",
  65: "K_A",
  83: "K_S",
  68: "K_D",
  32: "K_SPACE",
  37: "K_LEFT",
  38: "K_UP",
  39: "K_RIGHT",
  40: "K_DOWN"
};

const KEY_STATES = {
  UP: 0,
  DOWN: 1
}

const KEY_EVENTS = {
  UP_PRESSED: 1,
  DOWN_PRESSED: 2,
  LEFT_PRESSED: 3,
  RIGHT_PRESSED: 4,
  UP_RELEASED: 5,
  DOWN_RELEASED: 6,
  LEFT_RELEASED: 7,
  RIGHT_RELEASED: 8,
  INTERACT_PRESSED: 9,
  INTERACT_RELEASED: 10
};
const KEY_EVENTS_INVERSE = {
  1: "UP_PRESSED",
  2: "DOWN_PRESSED",
  3: "LEFT_PRESSED",
  4: "RIGHT_PRESSED",
  5: "UP_RELEASED",
  6: "DOWN_RELEASED",
  7: "LEFT_RELEASED",
  8: "RIGHT_RELEASED",
  9: "INTERACT_PRESSED",
  10: "INTERACT_RELEASED"
};


// Change this config to change mapping between inputs and events
var EVENT_MAPPING = {
  K_W: {
    DOWN: KEY_EVENTS.UP_PRESSED,
    UP: KEY_EVENTS.UP_RELEASED
  },
  K_S: {
    DOWN: KEY_EVENTS.DOWN_PRESSED,
    UP: KEY_EVENTS.DOWN_RELEASED
  },
  K_D: {
    DOWN: KEY_EVENTS.RIGHT_PRESSED,
    UP: KEY_EVENTS.RIGHT_RELEASED
  },
  K_A: {
    DOWN: KEY_EVENTS.LEFT_PRESSED,
    UP: KEY_EVENTS.LEFT_RELEASED
  },
  K_Down: {
    DOWN: KEY_EVENTS.DOWN_PRESSED,
    UP: KEY_EVENTS.DOWN_RELEASED
  },
  K_UP: {
    DOWN: KEY_EVENTS.UP_PRESSED,
    UP: KEY_EVENTS.UP_RELEASED
  },
  K_RIGHT: {
    DOWN: KEY_EVENTS.RIGHT_PRESSED,
    UP: KEY_EVENTS.RIGHT_RELEASED
  },
  K_LEFT: {
    DOWN: KEY_EVENTS.LEFT_PRESSED,
    UP: KEY_EVENTS.LEFT_RELEASED
  },
  K_SPACE: {
    DOWN: KEY_EVENTS.INTERACT_PRESSED,
    UP: KEY_EVENTS.INTERACT_RELEASED
  },
}

/*##############################################################################
# Input
##############################################################################*/
var input = {
  key_events: {}
};

input.mousePos = { x: 0, y: 0};
input.getMousePosition = function(){
  return input.mousePos;
}

input.KEYS_USED = [
  KEYS.K_W, 
  KEYS.K_A, 
  KEYS.K_S, 
  KEYS.K_D,
  KEYS.K_UP, 
  KEYS.K_RIGHT, 
  KEYS.K_LEFT, 
  KEYS.K_DOWN, 
  KEYS.K_SPACE
];
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
    let key_name = KEYS_INVERSE[evt.which];
    if(typeof(EVENT_MAPPING[key_name]?.DOWN) !== "undefined"){
      let event = EVENT_MAPPING[key_name].DOWN;
      input.key_events[event] = 1;
      console.log(KEY_EVENTS_INVERSE[event] + "" + evt.which);
    }
  }
}
input.onKeyUp = function(evt){
  if(evt.which in input.input.keys){
    input.input.keys[evt.which] = false;
    let key_name = KEYS_INVERSE[evt.which];
    if(typeof(EVENT_MAPPING[key_name]?.UP) !== "undefined"){
      let event = EVENT_MAPPING[key_name].UP;
      input.key_events[event] = 1;
      console.log(KEY_EVENTS_INVERSE[event]);
    }
  }
}

input.popKeyEvents = function(){
  let events = this.key_events;
  this.key_events = {};
  return events;
}

input.init = function(){
  for(let i in input.KEYS_USED){
    let key = input.KEYS_USED[i];
    input.input.keys[key] = false;
  }
  var canvas = document.getElementById("mainCanvas");
  //canvas.addEventListener("mousedown", scene.mouseDown);
  //canvas.addEventListener("mouseup", scene.mouseUp);
  canvas.addEventListener("mousemove", input.onMouseMove);
  window.addEventListener('keydown', input.onKeyDown, false);
  window.addEventListener('keyup', input.onKeyUp, false);
}