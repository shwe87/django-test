/*
This add-on will try to communicate with the Django Server created by me.
*/
var data = require("sdk/self").data;
var Request = require("sdk/request").Request;

var myPanel = require("sdk/panel").Panel({
  width: 500,
  height: 500,
  contentScriptFile: data.url('send-django.js'),
  contentURL: "about:blank",
  onHide: function () {
    myPanel.contentURL = "about:blank";
  }
});
 
var myWidget = require("sdk/widget").Widget({
  id: "myWidget",
  label: "Django test",
  width:60,
  content: "Django!",
  panel: myPanel,
  onClick: function() {
    myPanel.contentURL = data.url('myPage.html');
  }
});

myPanel.port.on('clicked',function(messageToSend){
	console.log(messageToSend);
	var sendMessage = Request({
		url: 'http://localhost:8080/'+messageToSend,
		contentType: 'text/html; charset=utf-8',
		//overrideMimeType: "text/plain; charset=latin1",
 		onComplete: function (response) {
    			var answer = response.text;
    			myPanel.port.emit('response',response.text);
  		}
	});
	sendMessage.put();
});


 
