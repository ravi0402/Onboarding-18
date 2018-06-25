import React, { Component } from 'react';
import ReactDOM  from 'react-dom';


// class VideoList extends Component {

// 	// constructor(props) { 
// 	// 	super(props);
// 	// 	this.state = { term : ''}; 
// 	// }	

// 	render() {

const VideoList =(props) => {
	return (
		<ul className="col-md-4 list-group">
		{props.videos.length}
		</ul>
	);
	
}


export default VideoList ; 