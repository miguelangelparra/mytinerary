import { GET_ITINERARY } from './types'

//Realiza peticion de la ciudad especifica para obtener sus itinerarios, 
//envia por dispatch al reducer los itinerarios retornados como payload de la action
export const getItinerary = (city) => async (dispatch) => {

  const response = await fetch('http://localhost:5000/api/itinerary/' + city)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: GET_ITINERARY,
        payload: data
      }))

    .catch(e => console.log(e));


}
