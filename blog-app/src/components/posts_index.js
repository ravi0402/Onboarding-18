import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts(){	
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}> 
					<Link to={`/post/${post.id}`}>
						{post.title}
					</Link>
				</li>
				);
		});
	}

	render(){
		return (
			<div>
				<div className="pull-xs-right">
					<Link to="/post/new" className="btn btn-primary">Create a Post</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div> 
			);
	}
}

function mapStateToProps(state){
	return { posts : state.posts};
}
export default connect(mapStateToProps,{ fetchPosts })(PostsIndex);