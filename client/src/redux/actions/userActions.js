import { GET_USER} from './types';

export const getUsers = () => async (dispatch) => {

  const response = await fetch('http://localhost:5000/api/users')
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: GET_USER,
        payload: data
      }))
    .catch(e => console.log(e));
}


