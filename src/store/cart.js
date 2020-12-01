const initialState = {
  cart: [],
  totalItemsInCart: 0,
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let totalAdded;
  let results = [];
  let foundItem;
  const { type, payload } = action;
  console.log('STATE CART??', state, 'Action', action);
  console.log(type, payload);
  switch (type) {
    case 'ADD':
      console.log('ADD');
      totalAdded = state.totalItemsInCart + 1;
      console.log('totalAddedtotalAdded', totalAdded);

      foundItem = state.cart.find(item => item.name === payload.name);
      if (!foundItem) {
        results.push({ name: payload.name, count: 1, price: payload.price });
        results = [...state.cart, ...results];
      } else {
        state.cart.forEach(item => {
          if (foundItem.name === item.name) {
            item.count++;
          }
          results.push(item);
        });
      }
      return { cart: results, totalItemsInCart: totalAdded };
    case 'REMOVE':
      console.log('REMOVE');
      totalAdded = state.totalItemsInCart - 1;
      console.log('totalAddedtotalAdded', totalAdded);
      foundItem = state.cart.find(item => item.name === payload);
      state.cart.forEach(item => {
        if (foundItem.name === item.name) {
          item.count--;
        }
        if (item.count !== 0) results.push(item);
      });

      return { cart: results, totalItemsInCart: totalAdded };

    default:
      return state;
  }
};

export const add = item => {
  console.log(item);
  return {
    type: 'ADD',
    payload: item,
  };
};
export const remove = item => {
  console.log(item);
  return {
    type: 'REMOVE',
    payload: item,
  };
};
