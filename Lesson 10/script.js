class options{
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	div(){
		let d = document.createElement('div');
		d.textContent = 'Любой текст';
		
		d.style.cssText = `height: ${this.height}px; \
    						width: ${this.width}px; \
    						background-color: ${this.bg}; \
    						font-size: ${this.fontSize}px; \
    						text-align: ${this.textAlign}`;

    	document.body.appendChild(d);

	}

}



let text = new options(200, 300, 'purple', 80, 'center');
text.div();