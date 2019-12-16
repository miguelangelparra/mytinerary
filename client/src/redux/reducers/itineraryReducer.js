import {GET_ITINERARY} from '../actions/types'

//Inicializador de stado de reducer para itinerarios
const initialState={
itinerary:[]
}

export default function(state=initialState,action){
switch(action.type){
  //Setea en el Store principal los itinerarios pasados por el payload de la action
  case GET_ITINERARY:
    return{
      ...state, 
      itinerary: action.payload,
    }
    
    default:
      return state;
}

}