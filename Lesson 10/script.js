class options{
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	Div(){
		let div = document.createElement('div');
		div.textContent = 'Любой текст';
		
		div.style.cssText = `height: ${this.height}px; \
    						width: ${this.width}px; \
    						background-color: ${this.bg}; \
    						font-size: ${this.fontSize}px; \
    						text-align: ${this.textAlign}`;

    	document.body.appendChild(div);

	}

}



let text = new options(200, 300, 'purple', 80, 'center');
text.Div();