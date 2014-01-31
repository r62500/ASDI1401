// Aaron Korpa
// ASDI 1401
// Project 4

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
		
		data = rows.rows();
		tableView.setData(data);
		
		//let the user know it has been saved
		alert("Your data has been saved!"); //was (saveData + "string")
	}
});

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
					data = rows.rows();
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
					
					data = rows.rows();
					tableView.setData(data);
					
					alert("Row deleted!");	
				}
			});
			dialogSure.show();
		}
	});
	dialog.show();
});