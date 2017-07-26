import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware } from './middleware';

import common from './reducers/common';

const reducer = combineReducers({
  common,
});

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, applyMiddleware(promiseMiddleware));


export default store;