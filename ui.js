/*##############################################################################
# User interface elements. These make the assumption of 800x600 canvas,
# so be prepared to tweak values if you change that.
##############################################################################*/

var ui = {};

/*##############################################################################
# LinearDialogue. Displays up to 260 characters per slide.
# .click() advances one slide. Reaching the end of the slide calls onEnd
##############################################################################*/

ui.newLinearDialogue = function(slides, onEnd = null){
	var d = {
		activeSlide: 0,
		slides: slides,
		x: 0,
		y: 500,
		height: 100,
		width: 800,
		fontSize: 20,
		onEnd: onEnd,
		_active: true
	};
	d.show = function(){
		d._active = true;
	};
	d.hide = function(){
		d._active = false;
	};
	d.update = function(){
		if(!d._active){
			return;
		}
		gfx.drawBox(d.x, d.y, d.width, d.height);
		let text = d.slides[d.activeSlide];
		let rows = text.match(/.{1,65}/g);
		for(let i = 0; i < rows.length; i++){
			let offset = i + 1;
			let padding = 5;
			gfx.drawText(rows[i], d.x+padding, d.y + (d.fontSize * offset), "20px monospace");
		}
	};
	d.advance = function(){
		if(!d._active){
			return;
		}
		if(d.activeSlide < d.slides.length-1){
			d.activeSlide++;
		}

		if(d.activeSlide == d.slides.length-1 && d.onEnd != null){
			d.onEnd();
		}
	};
	return d;
}

/*##############################################################################
# DialogueTree
##############################################################################*/