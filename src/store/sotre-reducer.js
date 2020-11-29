import data from '../data';
console.log(data);
const { categories, products } = data;
const productsToDisplay = products.filter(product => product.category === categories[0].name);
const initialState = {
  categories,
  products,
  productsToDisplay,
  activeCategory: categories[0].name,
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('STATE??', state, 'Action', action);
  console.log(type, payload);
  switch (type) {
    case 'REACTIVATE':
      console.log('REACTIVATE');
      let activeCategory = payload;
      let productsToDisplay = products.filter(product => product.category === payload);
      return { activeCategory, productsToDisplay, categories };

    default:
      return state;
  }
};

export const reactivate = name => {
  console.log('helloooo');
  console.log(name);
  return {
    type: 'REACTIVATE',
    payload: name,
  };
};
