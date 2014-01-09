// Aaron Korpa
// ASDI Term 1401
// Project 1

var objData = require("data");

exports.rows = function createObjectRows() {
	for(i=0;i<objData.data.length;i++){
		var row = Ti.UI.createTableViewRow({
			height: 60
		});
		
		var nameLabel = Ti.UI.createLabel({
			text: objData.data[i].announce(),
			font: {fontSize:20,fontFamily:'Helvetica Neue'},
			height: "auto",
			left: 10,
			top: 5,
			color: "#000"
		});
		
		row.add(nameLabel);
		tableData.push(row);
	};
};
