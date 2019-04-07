import store from './store';
import {
  requestMovies
} from './movieApi';
import {
  MOVIES_LOADED
} from './actions';
import ReactDOM from 'react-dom'
import Filter from './Filter'
import React from 'react'
import { Provider } from 'react-redux';

requestMovies().then(movies => store.dispatch({
  type: MOVIES_LOADED,
  movies
}));

ReactDOM.render( 
<Provider store = { store } >
 <main className = "ph6 pv4" >
  <h1 className = "mt0" > Programme </h1> 
  <Filter name = "filter" id = "filter" label = "Just favorites" />
  </main> 
  </Provider>,
  document.getElementById('app')
)