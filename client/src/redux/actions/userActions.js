import { GET_USER, AUTH_USER } from './types';

//Busca al usuario
export const getUsers = () => async (dispatch) => {

  const response = await fetch('http://localhost:5000/api/users')
    .then(response => response.json())
    //realiza dispatch al reducer con la data retornada por el servidor como payload de la action
    .then(data =>
      dispatch({
        type: GET_USER,
        payload: data
      }))
    .catch(e => console.log(e));
}

//Autentica al usuario a traves del totem
export const authUser = () => async (dispatch) => {
  const URL = "http://localhost:5000/api/users/auth"

  //Busca el totem en el localStorage  
  const token = localStorage.getItem("token")

  //Define una variable con el valor que sera enviado por header para la authorization, se debe agregar "bearer" 
  //al inicio del string, seguido de un espacio y luego el totem
  const auth = 'bearer ' + token

  //Se realiza peticion con los header necesarios
  const response = await fetch(URL, {
    method: 'POST',
    //body: JSON.stringify(token),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth
    }
  })
    .then(response => response.json())

    // se hace el dispatch al reducer con la data retornada del servidor como payload de la action
    .then(data =>
      dispatch({
        type: AUTH_USER,
        payload: data
      }))
    .catch(e => console.log(e))
}



