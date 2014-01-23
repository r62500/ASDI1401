// Aaron Korpa
// ASDI 1401
// Project 3

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var db = Titanium.Database.open("users");
db.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, user TEXT)");

var rows = require("buildRows");
var data = rows.rows();
var tableView = Titanium.UI.createTableView({
	data: data,
	editable: false,
	top: 50
});

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window - USER INPUT
//
var win1 = Titanium.UI.createWindow({  
    title:'User Input Window',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'User Input',
    window:win1
});

// User input fields

var firstName = Titanium.UI.createTextField({
	borderColor: "#fff",
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#000",
	top: 10,
	height: 60,
	width: 300,
	textAlign: "center",
	hintText: "* First Name"
});

var lastName = Titanium.UI.createTextField({
	borderColor: "#fff",
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#000",
	top: 80,
	height: 60,
	width: 300,
	textAlign: "center",
	hintText: "* Last Name"
});

var phoneNumber = Titanium.UI.createTextField({
	borderColor: "#fff",
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#000",
	top: 150,
	height: 60,
	width: 300,
	textAlign: "center",
	hintText: "Phone Number (optional)"
});

var submitButton = Titanium.UI.createButton({
	top: 260,
	height: 60,
	width: 300,
	title: "Submit Data"
});

// EDIT WINDOW view code

var editWindow = Titanium.UI.createWindow({
	title: "Edit Window",
	backgroundColor: "#fff",
	layout: "vertical"
});

var editFirstName = Titanium.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#000",
	width: 300,
	height: 60,
	top: 5,
	textAlign: "center",
	hintText: "First Name"
});

var editLastName = Titanium.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#000",
	width: 300,
	height: 60,
	top: 5,
	textAlign: "center",
	hintText: "Last Name"
});

var editPhoneNumber = Titanium.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#000",
	width: 300,
	height: 60,
	top: 5,
	textAlign: "center",
	hintText: "Phone Number"
});

var saveButton = Titanium.UI.createButton({
	title: "Save",
	top: 30,
	height: 60,
	width: 300
});

var cancelButton = Titanium.UI.createButton({
	title: "Cancel",
	top: 5,
	height: 60,
	width: 300
});

editWindow.add(editFirstName, editLastName, editPhoneNumber, saveButton, cancelButton);

win1.add(firstName, lastName, phoneNumber, submitButton);

//
// create controls tab and root window - DATABASE
//
var win2 = Titanium.UI.createWindow({  
    title:'Database Window',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Database',
    window:win2
});

// Create Options dialog box
var options = {
	cancel: 2,
	options: ["Edit", "Delete", "Cancel"],
	selectedIndex: 2,
	destructive: 1,
	title: "Edit Or Delete File?"
};

var sure = {
	cancel: 1,
	options: ["Yes", "No"],
	selectedIndex: 1,
	destructive: 0,
	title: "Are you sure you want to delete this item?"
};

// load in event listeners for crud functions
var load = require("crud");


win2.add(tableView);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

// open tab group
tabGroup.open();
