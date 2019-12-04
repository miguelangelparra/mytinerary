import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'
import userReducer from './userReducer'
// import { useReducer } from 'react';


export default combineReducers({
  cities:citiesReducer,
  citiesFiltered: citiesReducer,
  itinerary: itineraryReducer,
  user: userReducer
})