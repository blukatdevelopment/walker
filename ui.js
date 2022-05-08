/*##############################################################################
# User interface elements. These make the assumption of 800x600 canvas,
# so be prepared to tweak values if you change that.
##############################################################################*/

var ui = {};

/*##############################################################################
# LinearDialogue. Displays up to 260 characters per slide.
# .click() advances one slide. Reaching the end of the slide calls onEnd
##############################################################################*/

ui.newLinearDialogue = function(slides){
	let d = {
		activeSlide: 0,
		slides: slides,
		x: 0,
		y: 500,
		height: 100,
		width: 800,
		fontSize: 20,
		onEnd: onEnd,
		finished: false
	};
	d.update = function(){
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
		if(d.activeSlide < d.slides.length-1){
			d.activeSlide++;
		}

		if(d.activeSlide == d.slides.length-1){
			d.finished = true;
		}
	};
	return d;
}

/*##############################################################################
# DialogueSelect
# Displays up to 4 options, 63 characters each
##############################################################################*/

ui.newDialogueSelect = function(options){
	let d = {
		finished: false,
		selected: 0,
		options: options,
		x: 0,
		y: 500,
		height: 100,
		width: 800,
		fontSize: 20
	};

	d.update = function(){
		if(d.finished){
			return;
		}
		gfx.drawBox(d.x, d.y, d.width, d.height);
		for(let i = 0; i < options.length && i < 4; i++){
			let offset = i + 1;
			let padding = 5;
			let selected = i == d.selected;
			let text = selected ? "> " + d.options[i] : "  " + d.options[i];
			gfx.drawText(text, d.x+padding, d.y + (d.fontSize * offset), "20px monospace");
		}
	};

	d.selectPrevious = function(){
		if(d.finished){
			return;
		}
		d.selected--;
		if(d.selected < 0){
			d.selected = d.options.length-1;
		}
	}

	d.selectNext = function(){
		if(d.finished){
			return;
		}
		d.selected++;
		if(d.selected > d.options.length-1){
			d.selected = 0;
		}
	}

	d.select = function(){
		d.finished = true;
	}
	return d;
}