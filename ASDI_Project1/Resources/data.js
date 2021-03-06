// Aaron Korpa
// ASDI Term 1401
// Project 1


// Objects using literal notation
var obj1 = {
	name : "Object 1",
	length : 4,
	width : 3,
	area : function () {
		return this.length * this.width;
	},
	announce : function () {
		return "I am " + this.name + ". I have a height of " + this.length + ". I have a width of " + this.width + ". This means that my area is " + this.area() + ".";
	}
};

var obj2 = {
	name : "Object 2",
	length : 5,
	width : 9,
	area : function () {
		return this.length * this.width;
	},
	announce : function () {
		return "I am " + this.name + ". I have a height of " + this.length + ". I have a width of " + this.width + ". This means that my area is " + this.area() + ".";
	}
};

var obj3 = {
	name : "Object 3",
	length : 1,
	width : 2,
	area : function () {
		return this.length * this.width;
	},
	announce : function () {
		return "I am " + this.name + ". I have a height of " + this.length + ". I have a width of " + this.width + ". This means that my area is " + this.area() + ".";
	}
};

var obj4 = {
	name : "Object 4",
	length : 8,
	width : 7,
	area : function () {
		return this.length * this.width;
	},
	announce : function () {
		return "I am " + this.name + ". I have a height of " + this.length + ". I have a width of " + this.width + ". This means that my area is " + this.area() + ".";
	}
};

var obj5 = {
	name : "Object 5",
	length : 2,
	width : 9,
	area : function () {
		return this.length * this.width;
	},
	announce : function () {
		return "I am " + this.name + ". I have a height of " + this.length + ". I have a width of " + this.width + ". This means that my area is " + this.area() + ".";
	}
};

// Objects using dot notation
var obj6 = new Object();
obj6.name = "Object 6";
obj6.length = 1;
obj6.width = 4;
obj6.area = function() {
	return obj6.length * obj6.width;
};
obj6.announce = function() {
	return "I am " + obj6.name + ". I have a height of " + obj6.length + ". I have a width of " + obj6.width + ". This means that my area is " + obj6.area() + ".";
};

var obj7 = new Object();
obj7.name = "Object 7";
obj7.length = 7;
obj7.width = 6;
obj7.area = function() {
	return obj7.length * obj7.width;
};
obj7.announce = function() {
	return "I am " + obj7.name + ". I have a height of " + obj7.length + ". I have a width of " + obj7.width + ". This means that my area is " + obj7.area() + ".";
};

var obj8 = new Object();
obj8.name = "Object 8";
obj8.length = 3;
obj8.width = 2;
obj8.area = function() {
	return obj8.length * obj8.width;
};
obj8.announce = function() {
	return "I am " + obj8.name + ". I have a height of " + obj8.length + ". I have a width of " + obj8.width + ". This means that my area is " + obj8.area() + ".";
};

var obj9 = new Object();
obj9.name = "Object 9";
obj9.length = 4;
obj9.width = 2;
obj9.area = function() {
	return obj9.length * obj9.width;
};
obj9.announce = function() {
	return "I am " + obj9.name + ". I have a height of " + obj9.length + ". I have a width of " + obj9.width + ". This means that my area is " + obj9.area() + ".";
};

var obj10 = new Object();
obj10.name = "Object 10";
obj10.length = 5;
obj10.width = 8;
obj10.area = function() {
	return obj10.length * obj10.width;
};
obj10.announce = function() {
	return "I am " + obj10.name + ". I have a height of " + obj10.length + ". I have a width of " + obj10.width + ". This means that my area is " + obj10.area() + ".";
};

// Array of all objects
var allObjects = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];

// Export array for use within other js files.
exports.data = allObjects;
