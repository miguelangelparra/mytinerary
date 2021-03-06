//Importa los types de las cities
import { GET_CITIES, FILTER_CITIES } from './types';

//Solicita todas las ciudades y envia al reducer de cities la informacion retornada como payload de la action
export const getCities = () => async (dispatch) => {

  const response = await fetch('http://localhost:5000/api/cities')
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: GET_CITIES,
        payload: data
      }))
    .catch(e => console.log(e));
}

//Filtra las ciudades segun los parametros enviados en el input. 
//Envia un dispatch al reducer de cities con las ciudades filtradas a traves del payload de la action
export const filterCities = (searchCity, cities) => {

  let filteredCities = cities
  filteredCities = filteredCities.filter((city) => {
    let cityName = city.name.toLowerCase()
    return cityName.includes(
      searchCity.toLowerCase())
  })
  return ({
    type: FILTER_CITIES,
    payload: filteredCities
  })
}

