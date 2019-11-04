import {GET_CITIES} from '../actions/types'
import { from } from "zen-observable"

const initialState={
  cities : []
}

export default function(state=initialState,action){
switch(action.type){
  case GET_CITIES:
    return{
      ...state
    }
    default:
      return state;

}

}