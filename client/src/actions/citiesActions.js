import {GET_CITIES, SET_CITIES} from './types';

export const getCities = () => {
  
  return{
    type: GET_CITIES
  }
}

export const setCities = () => {
  
  return {
    types: SET_CITIES
  }
}
