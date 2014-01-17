// Aaron Korpa
// ASDI 1401
// Project 2

var remoteResponse, remoteError, json, testTitle1, testAuthor1, testTitle2, testAuthor2, testTitle3, testAuthor3;


var remoteResponse = function(){
	Ti.API.debug(this.responseText);
	json = JSON.parse(this.responseText);
	
	testTitle1 = json.data.children[10].data.title;
	testAuthor1 = json.data.children[10].data.author;
	testTitle2 = json.data.children[11].data.title;
	testAuthor2 = json.data.children[11].data.author;
	testTitle3 = json.data.children[12].data.title;
	testAuthor3 = json.data.children[12].data.author;
			
	Ti.API.debug(testTitle1);
	Ti.API.debug(testAuthor1);
	Ti.API.debug(testTitle2);
	Ti.API.debug(testAuthor2);
	Ti.API.debug(testTitle3);
	Ti.API.debug(testAuthor3);		
	
	author1.text = "The author of this post is: " + testAuthor1;
	title1.text = "The title of this post is: " + testTitle1;
	author2.text = "The author of this post is: " + testAuthor2;
	title2.text = "The title of this post is: " + testTitle2;
	author3.text = "The author of this post is: " + testAuthor3;
	title3.text = "The title of this post is: " + testTitle3;		
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