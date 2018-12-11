import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import recordsReduces from '../components/record/reducers.js';

let reducer = combineReducers({
  records: recordsReduces,
});

const store = () => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;