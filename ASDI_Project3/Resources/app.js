// Aaron Korpa
// ASDI 1401
// Project 3

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var db = Titanium.Database.open("users");
db.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, user TEXT)");

var data = getRowData();

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
	color: "#000",
	top: 10,
	height: 60,
	width: 400,
	textAlign: "center",
	hintText: "First Name"
});

var lastName = Titanium.UI.createTextField({
	color: "#000",
	top: 80,
	height: 60,
	width: 400,
	textAlign: "center",
	hintText: "Last Name"
});

var phoneNumber = Titanium.UI.createTextField({
	color: "#000",
	top: 150,
	height: 60,
	width: 400,
	textAlign: "center",
	hintText: "Phone Number"
});

var submitButton = Titanium.UI.createButton({
	top: 220,
	height: 60,
	width: 300,
	title: "Submit Data"
});

// EDIT WINDOW view code

var editWindow = Titanium.UI.createWindow({
	title: "Edit Window",
	backgroundColor: "#000",
	layout: "vertical"
});

var editFirstName = Titanium.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#000",
	width: 400,
	height: 60,
	top: 10,
	hintText: "First Name"
});

var editLastName = Titanium.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#000",
	width: 400,
	height: 60,
	top: 80,
	hintText: "Last Name"
});

var editPhoneNumber = Titanium.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#000",
	width: 400,
	height: 60,
	top: 150,
	hintText: "Last Name"
});

var saveButton = Titanium.UI.createButton({
	title: "Save",
	height: 50,
	width: 300
});

var cancelButton = Titanium.UI.createButton({
	title: "Cancel",
	height: 50,
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

function getRowData() {
	var newData = [];
	// Loop through data for window #2
	var rows = db.execute("SELECT * FROM users");
	while (rows.isValidRow()) {
		var parsedData = unescape(rows.fieldByName("user"));
		var displayData = JSON.parse(parsedData);
		// Add table row
		//Store the fields directly to the rowData
		newData.push({
			title: displayData.first_name + " " + displayData.last_name,
			first_name: displayData.first_name,
			last_name: displayData.last_name,
			id: rows.fieldByName("id")
		});
		rows.next();
	}
	
	return newData;
};

win2.add(tableView);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
