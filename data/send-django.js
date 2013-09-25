var button = document.getElementById('myButton');
if (button != null){
	console.log("BUTTON NOT NULL!!!");
	button.addEventListener('click',function onClick(event){
		console.log("CLICKED!!!");
		self.port.emit('clicked','http://www.wikipedia.com');	
	},false);
}


self.port.on('response',function(answer){
	var newText = document.createElement('h1');
	var text = document.createTextNode('The answer is ' + answer);
	newText.appendChild(text);
	document.body.appendChild(newText);
	if (answer == 'OK'){
		var a = document.createElement('a');
		text = document.createTextNode('Click here to see the list in DJango.');
		a.appendChild(text);
		var href = document.createAttribute('href');
		href.value = 'http://localhost:8080';
		a.setAttributeNode(href);
		document.body.appendChild(a);	
	}
	console.log(answer);

});
