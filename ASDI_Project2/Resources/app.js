// Aaron Korpa
// ASDI 1401
// Project 2


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var remote = require("remote_data");

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({
	title: "Aaron Korpa - Project 2",
	backgroundColor: "#fff"
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Remote Data',
    window:win1
});

// create view
var view = Ti.UI.createView({
});

// Labels to apply remote data to.
var author1 = Ti.UI.createLabel({
	top: 10,
	left: 5
});

var title1 = Ti.UI.createLabel({
	top: 40,
	left: 5
});

var author2 = Ti.UI.createLabel({
	top: 100,
	left: 5
});

var title2 = Ti.UI.createLabel({
	top: 130,
	left: 5
});

var author3 = Ti.UI.createLabel({
	top: 190,
	left: 5
});

var title3 = Ti.UI.createLabel({
	top: 220,
	left: 5
});
// add labels to view
view.add(author1, title1, author2, title2, author3, title3);

// add view to window
win1.add(view);

//  add tabs
tabGroup.addTab(tab1);  

// open tab group
tabGroup.open();