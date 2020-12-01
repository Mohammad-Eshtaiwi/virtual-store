import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; //optional
// import storeReducer from './sotre-reducer';
import productsReducer from './products';
import categoriesReducer from './categories';
import cartReducer from './cart';

// combine reducers is not necessary when you only have 1 reducer

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers);
};

export default store();
