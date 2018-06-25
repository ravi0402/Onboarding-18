var React = require('react');
var Dropdown = require('./dropdown');


var options = 
{
	title: "Choose",
	items : ["a","b","c"]

};


 var element = React.createElement(Dropdown, options);


// var element = React.createElement(Badge, options);
// var element_thumbnail = React.createElement(Thumbnail, options);	


// ask react to render the class 
React.render(element, document.querySelector('.target'));