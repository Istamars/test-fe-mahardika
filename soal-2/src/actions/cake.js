import {GET_CAKE, GET_ONE_CAKE} from './type';

export const getCake = () => {
  return {
    type: GET_CAKE,
  }
}

export const getOneCake = id  => {
  console.log('get called action id',id)
  return {
    type: GET_ONE_CAKE,
    payload: {
      id
    }
  }
}