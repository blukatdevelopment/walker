let walker = {};
let DIRS = {
    NORTH: 0,
    SOUTH: 1,
    EAST: 2,
    WEST: 3
};

walker.newPlayer = function(){
    let p = {
        color: "blue",
        posX: 100,
        posY: 100,
        movX: 0, // Movement on x axis
        movY: 0, // Movement on y axis
        speed: 3,
        size: 10
    };
    p.update = function(key_events){
        if(Object.keys(key_events).length > 0){
            //console.log(key_events);
        }
        if(KEY_EVENTS.UP_PRESSED in key_events){
            this.movY = -1;
        }
        if(KEY_EVENTS.DOWN_PRESSED in key_events){
            this.movY = 1;
        }
        if(KEY_EVENTS.RIGHT_PRESSED in key_events){
            this.movX = 1;
        }
        if(KEY_EVENTS.LEFT_PRESSED in key_events){
            this.movX = -1;
        }
        if((KEY_EVENTS.UP_RELEASED in key_events) ||
            KEY_EVENTS.DOWN_RELEASED in key_events){
            this.movY = 0;
        }
        if((KEY_EVENTS.RIGHT_RELEASED in key_events) ||
            (KEY_EVENTS.LEFT_RELEASED in key_events)){
            this.movX = 0;
        }
        this.posX += this.movX * this.speed;
        this.posY += this.movY * this.speed;
    };
    p.draw = function(){
        gfx.setFillColor(this.color);
        gfx.drawCircle(this.posX, this.posY, this.size/2, true);
    }
    return p;
};