// Aaron Korpa
// ASDI 1401
// Project 4

var remoteResponse, remoteError, json, testAuthor1, testAuthor2;


var remoteResponse = function(){
	Ti.API.debug(this.responseText);
	json = JSON.parse(this.responseText);
	
	testAuthor1 = json.data.children[8].data.author;
	testAuthor2 = json.data.children[11].data.author;

			
	Ti.API.debug(testAuthor1);
	Ti.API.debug(testAuthor2);

	//apply data from reddit to form field.
	firstName.value = testAuthor1;
	lastName.value = testAuthor2;
};

var remoteError = function(e){
	Ti.API.debug("Status: " + this.status);
	TI.API.debug("Text: " + this.responseText);
	TI.API.debug("Error: " + e.error);
	alert("There is a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
	onload: remoteResponse,
	onError: remoteError,
	timeout: 5000
});

xhr.open("GET", "http://api.reddit.com/");
xhr.send();
