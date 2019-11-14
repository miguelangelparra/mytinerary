import {GET_ITINERARY} from './types'

export const getItinerary = (city) => async (dispatch) =>{

  const response = await fetch('http://localhost:5000/api/itinerary/'+city)
  .then(response => response.json() )
  .then(data => 
   dispatch({
   type: GET_ITINERARY,
   payload: data
 
 }))
  
   .catch(e => console.log(e));


}
