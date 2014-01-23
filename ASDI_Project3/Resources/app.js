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
	top: 220,
	height: 60,
	width: 300,
	title: "Submit Data"
});

// Click Event for Submit button
submitButton.addEventListener("click", function(e){
	
	//Make sure required fields are entered, else error.
	if (lastName.value == "" && firstName.value == "") {
		alert("First Name is a required field.");
	} else if (lastName.value == "") {
		alert("Last Name is a required field");
	} else if (firstName.value == "") {
		alert("First Name and Last Name are required fields.");
	} else {
		var userInput = {};

		
		userInput.first_name = firstName.value;
		userInput.last_name = lastName.value;
		if (phoneNumber.value == "") {
			phoneNumber.value = "No Phone";
			userInput.phone_number = phoneNumber.value;
		} else {
			userInput.phone_number = phoneNumber.value;
		}
		
		var saveData = escape(JSON.stringify(userInput));
		
		//Set that data, and sanitize with parameterization
		db.execute("INSERT INTO users (user) VALUES(?)", saveData);
		
		//Clear input fields upon success
		firstName.value = "";
		lastName.value = "";
		phoneNumber.value = "";
		
		//Drop Keyboard
		firstName.blur();
		lastName.blur();
		phoneNumber.blur();
		
		data = getRowData();
		tableView.setData(data);
		
		//let the user know it has been saved
		alert("Your data has been saved!"); //was (saveData + "string")
	}
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
			title: displayData.first_name + " " + displayData.last_name + " - " + displayData.phone_number,
			first_name: displayData.first_name,
			last_name: displayData.last_name,
			phone_number: displayData.phone_number,
			id: rows.fieldByName("id")
		});
		rows.next();
	}
	
	return newData;
};

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

// Click event for options dialog
tableView.addEventListener("click", function(e){
	
	//Grab rowData stored in the row
	var id = e.rowData.id;
	var firstName = e.rowData.first_name;
	var lastName = e.rowData.last_name;
	var phoneNumber = e.rowData.phone_number;
	
	//Add dialogue options
	var dialog = Ti.UI.createOptionDialog(options);
	var dialogSure = Ti.UI.createOptionDialog(sure);
	
	//Lisen for each option in the options doalog
	dialog.addEventListener("click", function(e){
		if(e.index === 0) {
			//edit
			//populate that into the fields
			editFirstName.value = firstName;
			editLastName.value = lastName;
			editPhoneNumber.value = phoneNumber;
			
			editWindow.open();
			
			var saveChanges = function() {
				if (editFirstName.value == "" && editLastName.value == "") {
					alert("First Name is a required field.");
				} else if (editLastName.value == "") {
					alert("Last Name is a required field.");
				} else if (editFirstName.value == "") {
					alert("First Name and Last Name are required fields.");
				} else {
					var userInput = {};
					userInput.first_name = editFirstName.value;
					userInput.last_name = editLastName.value;
					userInput.phone_number = editPhoneNumber.value;
					
					var saveData = escape(JSON.stringify(userInput));
					
					//Set that data, and sanitize with parameterization
					
					db.execute("UPDATE users SET user=? WHERE id=?",saveData,id);
					
					//Clear input fields upon success
					editFirstName.value = "";
					editLastName.value = "";
					editPhoneNumber.value = "";
					
					//drop keyboard
					editFirstName.blur();
					editLastName.blur();
					editPhoneNumber.blur();
					
					//update into database
					data = getRowData();
					tableView.setData(data);
					
					//Remove Event Listener
					saveButton.removeEventListener("click", saveChanges);
					editWindow.close();
					alert("Row updated!");
				}
			};
			saveButton.addEventListener("click", saveChanges);
			
			var cancelChanges = function() {
				//Remove Event Listener
				cancelButton.removeEventListener("click", cancelChanges);
				editWindow.close();
			};
			cancelButton.addEventListener("click", cancelChanges);
			
			editWindow.open();
		} else if(e.index === 1) {
			dialogSure.addEventListener("click", function(e){
				if(e.index === 0) {
					db.execute("DELETE FROM users WHERE id=?", id);
					
					data = getRowData();
					tableView.setData(data);
					
					alert("Row deleted!");	
				}
			});
			dialogSure.show();
		}
	});
	dialog.show();
});

win2.add(tableView);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

// open tab group
tabGroup.open();
