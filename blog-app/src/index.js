import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import PostsIndex from './components/posts_index';
import NewPost from './components/post_new';
import PostsShow from './components/post_show';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);




ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
	    <div>
	    	<Switch>
	    		<Route path="/post/new" component={NewPost}/>
	    		<Route path="/post/:id" component={PostsShow}/>
	    		<Route path="/" component={PostsIndex}/>
	    	</Switch>
		</div>	  
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
