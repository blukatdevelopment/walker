/*##############################################################################
# titleScene Screen
##############################################################################*/

var titleScene = {};

titleScene.update = function(){
    gfx.clear();
    this.drawEndButton();
}

titleScene.drawEndButton = function(){
    gfx.drawBox(100, 100, 100, 100);
    gfx.drawText(`Kills: 10`, 100, 240);
    if(this.isEndButtonSelected()){
        gfx.drawLine(0, 0, 100, 100);
        gfx.drawLine(0, 400, 100, 200);
        gfx.drawLine(400, 0, 200, 100);
        gfx.drawLine(400, 400, 200, 200);
    }
}

titleScene.isEndButtonSelected = function (){
    var boxTopLeft = { x: 100, y: 100 };
    var boxBottomRight = { x: 200, y: 200};
    var point = input.getMousePosition();
    if(typeof point === "undefined" || point == null){
        return false;
    }
    return util.isInsideBox(boxTopLeft, boxBottomRight, point);
}

titleScene.mouseDown = function(){
    if(this.isEndButtonSelected()){
        console.log("Cool");
    }
    else{
        console.log("Not cool");
    }
}