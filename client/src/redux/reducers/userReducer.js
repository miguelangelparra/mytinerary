import {GET_USER} from '../actions/types'
import {POST_USER} from '../actions/types'
import {AUTH_USER} from '../actions/types'


const initialState={
  user:[]
}

export default function(state=initialState,action){
  switch(action.type){
    case GET_USER:
      return{
        ...state,
        user:action.payload
      }
      case POST_USER:
      return{
        ...state,
        user:action.payload
      }
      case AUTH_USER:
        return{
          ...state,
          user:action.payload
        }
      default:
        return state;
  }
}