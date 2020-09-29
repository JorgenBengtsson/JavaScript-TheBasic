class Write {
	constructor(elementId) {
		this.elementId = elementId;
	}
	getText() {
		return document.getElementById(this.elementId).innerHTML;
	}
	setText(text) {
		document.getElementById(this.elementId).innerHTML = text;
	}
	write(text) {
		this.setText(this.getText() + text + '<br/>');
	}
	a(text1, text2) {
		return text1 + " " + text2;
	}
}