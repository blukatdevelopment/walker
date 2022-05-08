/*##############################################################################
# Title Screen
##############################################################################*/
var titleScene = {};

titleScene.dialogue = ui.newDialogueSelect(["Cool", "Lame", "Rad"]);

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
        titleScene.dialogue.select();
    }
    if(evt.which === KEYS.K_D || evt.which === KEYS.K_S){
        titleScene.dialogue.selectNext();
    }
    if(evt.which === KEYS.K_A || evt.which === KEYS.K_W){
        titleScene.dialogue.selectPrevious();
    }
}