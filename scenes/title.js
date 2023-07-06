/*##############################################################################
# Title Screen
##############################################################################*/
function lerp(x, y, a){
    return x * (1 - a) + y * a;
}

var titleScene = {
    needInit: true
};

titleScene.init = function(){
    let ts = this;
    ts.needInit = false;

    ts.player = walker.newPlayer();
}

titleScene.update = function(key_events){
    let ts = this;
    if(ts.needInit){
        ts.init();
    }
    gfx.clear();
    ts.player.update(key_events);
    ts.player.draw();
}


console.log(titleScene);