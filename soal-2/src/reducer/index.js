// import { combineReducers } from 'redux';
import {GET_CAKE, GET_ONE_CAKE} from '../actions/type'
import cakes from '../data';

const initialState = cakes;

const cakeReducer = (state = initialState, action) => {
  console.log('state', state, action)
  switch (action.type) {
    case GET_CAKE: return {...state};
    case GET_ONE_CAKE: return {...state.cakes[action.payload.id]};
    default: return state;
  }
};

export default cakeReducer;
