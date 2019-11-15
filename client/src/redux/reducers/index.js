import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'


export default combineReducers({
  cities:citiesReducer,
  citiesFiltered: citiesReducer,
  itinerary: itineraryReducer
})