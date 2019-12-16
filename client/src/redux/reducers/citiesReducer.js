import {GET_CITIES, FILTER_CITIES} from '../actions/types'

const initialState={
  cities : [],
  citiesFiltered: []
}

export default function(state=initialState,action){
switch(action.type){
  //Setea en el Store todas las ciudades pasadas por el payload de la action .  Los duplica en otra variable para ser filtrada
  case GET_CITIES:
    return{
      ...state, 
      cities: action.payload,
      citiesFiltered: action.payload
    }
    //Setea en el store todas las ciudades pasadas por el payload de la action luego de ser filtradas
    case FILTER_CITIES:
      return{
        ...state,
        citiesFiltered: action.payload
      }
    default:
      return state;
}

}