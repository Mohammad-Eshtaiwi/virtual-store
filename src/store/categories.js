import data from '../data';
console.log(data);
const { categories } = data;
const initialState = {
  categories,
  activeCategory: categories[0].name,
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('STATE Category??', state, 'Action', action);
  console.log(type, payload);
  switch (type) {
    case 'REACTIVATE':
      console.log('REACTIVATE');
      return { categories: state.categories, activeCategory: payload };

    default:
      return state;
  }
};

export const reactivate = name => {
  console.log(name);
  return {
    type: 'REACTIVATE',
    payload: name,
  };
};
