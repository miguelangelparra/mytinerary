import {GET_CITIES, FILTER_CITIES} from '../actions/types'

const initialState={
  cities : [],
  citiesFiltered: []
}

export default function(state=initialState,action){
switch(action.type){
  case GET_CITIES:
    return{
      ...state, 
      cities: action.payload,
      citiesFiltered: action.payload
    }
    case FILTER_CITIES:
      return{
        ...state,
        citiesFiltered: action.payload
      }
    default:
      return state;
}

}