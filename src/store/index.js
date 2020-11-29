import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; //optional
import storeReducer from './sotre-reducer';

// combine reducers is not necessary when you only have 1 reducer

const reducers = combineReducers({ store: storeReducer });

const store = () => {
  return createStore(reducers);
};

export default store();
