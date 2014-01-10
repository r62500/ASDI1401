// Aaron Korpa
// ASDI Term 1401
// Project 1

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');



var buildRows = require("buildRows");
// create tab group
var tabGroup = Titanium.UI.createTabGroup();
var table = Ti.UI.createTableView();
var tableData = [];

buildRows.rows();

// create base UI tab and root window
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

table.setData(tableData);

win1.add(table);


//  add tabs
tabGroup.addTab(tab1);  

// open tab group
tabGroup.open();
