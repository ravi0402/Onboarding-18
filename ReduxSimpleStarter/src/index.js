import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
const API_KEY = "AIzaSyBRuTkJ6ahjIuTJfbvF1tlXhi8OlQ0sbyY" ;


class App extends Component {

	constructor(props){
		super(props);

		this.state = {videos : [] };

		YTSearch({key : API_KEY , term : 'SurfBoards'}, (data)=>	{
			this.setState({videos : data});
		});
	}

	render()
	{ 	
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
			);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));