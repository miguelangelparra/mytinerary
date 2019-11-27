import { GET_CITIES, FILTER_CITIES } from './types';

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

