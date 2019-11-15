import {GET_ITINERARY} from '../actions/types'

const initialState={
itinerary:[]
}

export default function(state=initialState,action){
switch(action.type){
  case GET_ITINERARY:
    return{
      ...state, 
      itinerary: action.payload,
    }
    
    default:
      return state;
}

}