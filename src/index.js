import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import movieReducer from './store/reducers/movie';
import watchedReducer from './store/reducers/watched';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  movie: movieReducer,
  watched: watchedReducer
})

const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
