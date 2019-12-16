//Importa todos los reducers
import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'
import userReducer from './userReducer'
// import { useReducer } from 'react';

//Combinador de reducers para exportarlos
export default combineReducers({
  cities:citiesReducer,
  citiesFiltered: citiesReducer,
  itinerary: itineraryReducer,
  user: userReducer
})