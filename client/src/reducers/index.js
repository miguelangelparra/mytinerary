import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer'


export default combineReducers({
  cities:citiesReducer
})