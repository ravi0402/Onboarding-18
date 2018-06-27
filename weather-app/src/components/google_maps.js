import React, { Component } from 'react';

export default class GoogleMap extends Component{

	componentDidMount(){
		const lat = parseFloat(this.props.lat);
		const lon = parseFloat(this.props.lon);
		console.log(lat,lon);
		new google.maps.Map(this.refs.map,{
			center : {
				lat : lat,
				lng : lon
			},
			zoom : 12
		});
	}

	render(){
		return <div ref="map" />;
	}
}

