// Aaron Korpa
// ASDI Term 1401
// Project 1

var objData = require("data");

exports.rows = function createObjectRows() {
	for(i=0;i<objData.data.length;i++){
		var row = Ti.UI.createTableViewRow({
			height: "60dp"
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