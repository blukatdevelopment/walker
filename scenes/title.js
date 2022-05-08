/*##############################################################################
# Title Screen
##############################################################################*/
var titleScene = {};

titleScene.dialogue = ui.newLinearDialogue(dLinearDialogue.slides, ()=>{

});

titleScene.update = function(){
    gfx.clear();
    titleScene.dialogue.update();
}

titleScene.drawTitle = function(){

}

titleScene.drawEndButton = function(){

}

titleScene.mouseDown = function(){

}

titleScene.keyDown = function(evt){
}

titleScene.keyUp = function(evt){
    if(evt.which === KEYS.K_SPACE){
        titleScene.dialogue.advance();
    }
}