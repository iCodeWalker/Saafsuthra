import createDataContext from './createDataContext';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, [action.name]: state[action.name] + 1};
    case 'decrement':
      return {...state, [action.name]: state[action.name] - 1};
    case 'total_clothes':
      return {...state, total_clothes: action.payload};
    case 'total_weight':
      return {...state, total_weight: action.payload};
    case 'total_cost':
      return {...state, total_cost: action.payload};
    default:
      return state;
  }
};

const increaseCounter = (dispatch) => (name) => {
  return dispatch({type: 'increment', name});
};

const decreaseCounter = (dispatch) => (name) => {
  return dispatch({type: 'decrement', name});
};

const totalClothes = (dispatch, state) => () => {
  const clothes = Object.values(state);
  //const sum = clothes.reduce((sum, val) => sum + val);
  dispatch({
    type: 'total_clothes',
    payload: clothes.reduce((sum, val) => sum + val),
  });
};

const predictedWeight = (disptach, state) => () => {
  const clothes = Object.values(state);
  const weightage = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0];

  disptach({
    type: 'total_weight',
    payload: parseInt(
      clothes.reduce((sum, ele, i) => {
        return sum + ele * weightage[i];
      }, 0),
    ),
  });
  console.log(
    clothes.reduce((sum, ele, i) => {
      return sum + ele * weightage[i];
    }, 0),
  );
};

const predictedCost = (dispatch, state) => () => {
  const PriceperKg = 60;
  dispatch({
    type: 'total_cost',
    payload: PriceperKg * state.total_weight,
  });
  console.log(PriceperKg * state.total_weight);
};

export const {Provider, Context} = createDataContext(
  counterReducer,
  {
    increaseCounter,
    decreaseCounter,
    totalClothes,
    predictedWeight,
    predictedCost,
  },
  {
    //Mens wear
    Tshirts: 0,
    Shirts: 0,
    Kurtas: 0,
    Pants: 0,
    Pyjamas: 0,
    Jeans: 0,
    Shorts: 0,
    Lowers: 0,
    Dhoti: 0,
    Shawl: 0,

    //Womens wear
    Tops: 0,
    Kurtis: 0,
    Shrugs: 0,
    Suits: 0,
    Jumpsuits: 0,
    Sarees: 0,
    Gowns: 0,
    Shorts: 0,
    Skirts: 0,
    Jean: 0,
    Trousers: 0,
    Lowers: 0,
    Leggings: 0,
    Stawl: 0,
    Dupatta: 0,
    Scarf: 0,
    Towels: 0,

    Lehnga: 0,
    total_clothes: 0,
    total_weight: 0,
    total_cost: 0,
  },
);
