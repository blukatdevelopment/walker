# Walker
This is a vanilla JS game using html canvas for graphics.
The goal is a game where you can walk in cardinal directions across a loaded tile map, and interact with objects, NPCs, or doors.

## BluTek Engine
This is a self-contained game engine on top of vanilla javascript. I'm a huge fan of the Godot game engine and take some inspiration from it. The intended use of this engine is to produce simple 2D browser-based games. The goal is minimizing the setup, development, and deployment process for devs in order to allow quickly prototyping and sharing new games.

### Modules
These are scripts with common functionality that can be shared between multiple scenes.
- `gfx.js` graphics functions here.
- `data.js` is a common data store to prevent tight-coupling between scenes.
- `main.js` has main gameloop. Configure framerate here.
- `input.js` sets up input handlers and keybindings.
- `ui.js` ui components go here.
- `util.js` utlity functions that don't belong anywhere else.
- `scene.js` configure your scenes and starting scene here.
- `sfx.js` configure your audio constants here.

### `scenes/`
This folder contains "scenes", which are self-contained scripts that are responsible for a particular screen/menu, game mode, or other chunk of functionality. One scene can be active at a time.

Javascript lacks builtin interfaces, but here's an example object containing all the functions expected of a new scene. Feel free to copy-paste this as a starting point.
```js
// Create the scene object.
var example = {};

// Called once per frame
example.update = function(){}
// Called every time the canvas is clicked
example.mouseDown = function(){}
// Called every time a click on the canvas is released
example.mouseUp = function(){}
// Called every time a configured key/button is pressed
example.keyDown = function(evt){}
// Called every time a configured key/button is released
example.keyUp = function(evt){}
```

### Assets
If you don't see them, you can create some asset folders to clean up your project.
You may wish to create a `music/`, `sfx/`, `dialogue/`, `maps/`, or `images/` folder when using assets.