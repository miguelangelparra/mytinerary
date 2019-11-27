import { GET_USER, POST_USER } from './types';

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

export const postUser = (newUser) => {

  var url = 'http://localhost:5000/api/users';
  var data = newUser

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

}