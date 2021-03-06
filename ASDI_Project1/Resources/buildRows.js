// Aaron Korpa
// ASDI Term 1401
// Project 1

// Load in object data from data.js file.
var objData = require("data");

// Loop thru array to create rows containing all of the object data.
exports.rows = function createObjectRows() {
	for(i=0;i<objData.data.length;i++){
		var row = Ti.UI.createTableViewRow({
			height: "100dp"
		});
		
		var nameLabel = Ti.UI.createLabel({
			text: objData.data[i].announce(),
			font: {fontSize:20,fontFamily:'Helvetica Neue'},
			height: "auto",
			left: "10dp",
			top: "5dp",
			color: "#000",
			touchEnabled:false
		});
		
		row.add(nameLabel);
		tableData.push(row);
	};
};
