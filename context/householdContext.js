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
    bedsheets: 0,
    double_bedsheets: 0,
    pillow_cover: 0,
    cushion_cover_small: 0,
    cushion_cover_large: 0,

    bath_robe_small: 0,
    bath_robe_big: 0,
    face_towel: 0,
    hand_towel: 0,
    bath_towel: 0,
    bath_mat: 0,

    apron: 0,
    kitchen_towel: 0,
    dinning_table_cloth: 0,
    table_cloth: 0,

    door_curtains: 0,
    window_curtains: 0,
    total_clothes: 0,
    total_weight: 0,
    total_cost: 0,
  },
);
