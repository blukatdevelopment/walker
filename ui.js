/*##############################################################################
# User interface elements. These make the assumption of 800x600 canvas,
# so be prepared to tweak values if you change that.
##############################################################################*/

var ui = {};

/*##############################################################################
# Slide
# This is the data for a single 260 character message displayed on the screen.
##############################################################################*/
ui.Slide = function(text = ""){
	let slide = {};
	slide.text = text;
	slide.class = "slide";
	return slide;
}

/*##############################################################################
# SlideShow. Displays a sequence of sllides.
# .advance() advances one slide.
##############################################################################*/

ui.SlideShow = function(slides, nextId=-1){
	let d = {
		activeSlide: 0,
		slides: slides,
		class: "slideshow",
		x: 0,
		y: 500,
		height: 100,
		width: 800,
		fontSize: 20,
		finished: false
	};
	d.update = function(){
		gfx.drawBox(d.x, d.y, d.width, d.height);
		let text = d.slides[d.activeSlide].text;
		let rows = text.match(/.{1,65}/g);
		for(let i = 0; i < rows.length; i++){
			let offset = i + 1;
			let padding = 5;
			gfx.drawText(rows[i], d.x+padding, d.y + (d.fontSize * offset), "20px monospace");
		}
	};
	d.select = function(){
		if(d.activeSlide < d.slides.length-1){
			d.activeSlide++;
		}

		if(d.activeSlide == d.slides.length-1){
			d.finished = true;
		}
	};
	d.selectNext = function(){}
	d.selectPrevious = function(){}
	return d;
}

/*##############################################################################
# Answer
# Data to display an answer and what to do when it's selected.
##############################################################################*/
ui.Answer = function(text, ){

}

/*##############################################################################
# Question
# Data to ask a question and display answers.
# Contains a slide and answers
##############################################################################*/
ui.Question = function(slide, answers){
	let d = {};
	d.prompt = slide;
	d.answers = answers;
	return d;
}

/*##############################################################################
# Select
# Displays up to 4 answers, 63 characters each
##############################################################################*/

ui.Select = function(answers){
	let d = {
		finished: false,
		selected: 0,
		answers: answers,
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
		for(let i = 0; i < answers.length && i < 4; i++){
			let offset = i + 1;
			let padding = 5;
			let selected = i == d.selected;
			let text = selected ? "> " + d.answers[i] : "  " + d.answers[i];
			gfx.drawText(text, d.x+padding, d.y + (d.fontSize * offset), "20px monospace");
		}
	};

	d.selectPrevious = function(){
		if(d.finished){
			return;
		}
		d.selected--;
		if(d.selected < 0){
			d.selected = d.answers.length-1;
		}
	}

	d.selectNext = function(){
		if(d.finished){
			return;
		}
		d.selected++;
		if(d.selected > d.answers.length-1){
			d.selected = 0;
		}
	}

	d.select = function(){
		d.finished = true;
	}
	return d;
}

/*##############################################################################
# DialogueManager
# Traverses nodes
##############################################################################*/

ui.newDialogueManager = function(nodes){
	let d = {};
	d.nodes = nodes;
	d.activeNode = d.nodes[0];
	d.update = function(){

	}
	d.select = function(){
		
	}
	d.selectNext = function(){

	}
	d.selectPrevious = function(){

	}
	return d;
}