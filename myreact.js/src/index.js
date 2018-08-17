import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import Reducer from './reducers/Reducer';
import ProfileReducer  from './reducers/ProfileReducer';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
const logger = createLogger();

var rootReducer = combineReducers({Reducer,ProfileReducer});
var store = createStore(rootReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
					<Provider store={store}>
						<BrowserRouter>
							<App />
						</BrowserRouter>	
					</Provider>
				,
	 document.getElementById('root'));
registerServiceWorker();
