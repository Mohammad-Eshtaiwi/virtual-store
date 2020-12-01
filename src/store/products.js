import data from '../data';
console.log(data);
const { products } = data;

const initialState = {
  products,
  productsToDisplay: [],
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('STATE Products??', state, 'Action', action);
  console.log(type, payload);
  switch (type) {
    case 'RERENDER':
      console.log('RERENDER');
      let productsToDisplay = state.products.filter(
        product => product.category === payload && product.inStock > 0
      );
      return { products, productsToDisplay };
    case 'DECREMENT':
      console.log('DECREMENT');

      const resultsAfterDecrement = state.products.map(product => {
        if (product.name === payload.name) {
          product.inStock--;
          return product;
        }
        return product;
      });
      let productsToDisplayAfterDecrement = resultsAfterDecrement.filter(
        product => product.category === payload.category && product.inStock > 0
      );
      console.log('productsToDisplayAfterDecrement', productsToDisplayAfterDecrement);
      return {
        productsToDisplay: productsToDisplayAfterDecrement,
        products: resultsAfterDecrement,
      };

    case 'INCREMENT':
      console.log('Increment');
      let { category, name } = products.find(product => product.name === payload);
      const resultsAfterIncrement = state.products.map(product => {
        if (product.name === name) {
          product.inStock++;
          return product;
        }
        return product;
      });
      let productsToDisplayAfterIncrement = resultsAfterIncrement.filter(
        product => product.category === category && product.inStock > 0
      );
      console.log('productsToDisplayAfterIncrement', productsToDisplayAfterIncrement);
      return {
        productsToDisplay: productsToDisplayAfterIncrement,
        products: resultsAfterIncrement,
      };

    default:
      return state;
  }
};

export const rerender = category => {
  console.log(category);
  return {
    type: 'RERENDER',
    payload: category,
  };
};
export const decrement = product => {
  console.log(product);
  return {
    type: 'DECREMENT',
    payload: product,
  };
};
export const increment = product => {
  console.log(product);
  return {
    type: 'INCREMENT',
    payload: product,
  };
};
