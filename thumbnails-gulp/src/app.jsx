var React = require('react');
var ThumbnailList = require('./thumbnails-list');


var options = 
{
	thumbnails_data : [ { 
	title : "Inbox",
	number : 40,
	imageUrl : "https://formatjs.io/img/react.svg" ,
	label : "ReactJS",
	content : "This is ReactJS"
},
{ 
	title : "Inbox",
	number : 40,
	imageUrl : "https://formatjs.io/img/react.svg" ,
	label : "ReactJS",
	content : "This is ReactJS"
},
{ 
	title : "Inbox",
	number : 40,
	imageUrl : "https://formatjs.io/img/react.svg" ,
	label : "ReactJS",
	content : "This is ReactJS"
},
{ 
	title : "Inbox",
	number : 40,
	imageUrl : "https://formatjs.io/img/react.svg" ,
	label : "ReactJS",
	content : "This is ReactJS"
}
]

};


var element = React.createElement(ThumbnailList, options);


// var element = React.createElement(Badge, options);
// var element_thumbnail = React.createElement(Thumbnail, options);	


// ask react to render the class 
React.render(element, document.querySelector('.target'));