// Aaron Korpa
// ASDI Term 1401
// Project 1

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// Load in data from buildRows.js file.
var buildRows = require("buildRows");

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// Create table view and empty array for data
var table = Ti.UI.createTableView();
var tableData = [];

// Execute the function that builds the rows using the data pulled in from buildRows.js file to fill the empty array.
buildRows.rows();

// create base UI tab and root window
var win1 = Titanium.UI.createWindow({  
    title:'Aaron Korpa - Project 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Objects',
    window:win1
});

// Add the data to the table now that the data has been added to the empty array.
table.setData(tableData);

// Add the table with all the data to the window.
win1.add(table);

//  add tabs
tabGroup.addTab(tab1);  

// open tab group
tabGroup.open();
