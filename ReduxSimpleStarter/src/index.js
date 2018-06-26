import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetails from './components/video-details';
const API_KEY = "AIzaSyBRuTkJ6ahjIuTJfbvF1tlXhi8OlQ0sbyY" ;


class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			videos : [], 
			selectedVideo : null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSearch({key : API_KEY , term : term}, (videos)=>	{
			this.setState({
				videos : videos,
				selectedVideo : videos[0]
			});
		});
	}

	render()
	{ 	
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
		return (
			<div>
				<SearchBar onSearchTermChange= {videoSearch}/>
				<VideoDetails video={this.state.selectedVideo} />
				<VideoList
				 onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }	
				 videos={this.state.videos} />
			</div>
			);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));