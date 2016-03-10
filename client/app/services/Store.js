import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import _ from 'lodash';

import * as reducers from '../reducers'

const rootReducer = combineReducers({
  ...reducers
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;