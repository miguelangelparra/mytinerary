import {GET_CITIES, SET_CITIES} from './types';

export const getCities = () => async (dispatch) => {

    const response = await fetch('http://localhost:5000/api/cities')
     .then(response => response.json() )
     .then(data => 
      dispatch({
      type: GET_CITIES,
      payload: data
    
    }))
     
      .catch(e => console.log(e));
  

}

export const setCities = () => {
  
  return {
    types: SET_CITIES
  }
}
