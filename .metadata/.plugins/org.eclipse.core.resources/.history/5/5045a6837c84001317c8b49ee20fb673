// Aaron Korpa
// ASDI 1401
// Project 3

exports.rows = function getRowData() {
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
