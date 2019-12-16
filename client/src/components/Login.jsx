import React from 'react';
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux'
import { authUser } from "../redux/actions/userActions"
import propTypes from 'prop-types'

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    redirect: false
  }

  //Manejador de evento de cambio en los valores de los input. modifica el estado 
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  //Manejador de evento de clickLogin
  handleSubmit = (e) => {
    e.preventDefault()

    var url = 'http://localhost:5000/api/users/login';
    var data = {
      email: this.state.email,
      password: this.state.password
    }
      ;

    //Peticion Post que envia credenciales de usuario al servidor
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        console.log('Usuario validado')
        //Luego de validar al usuario guarda el token en el storage
        localStorage.setItem("token", response.token)
        //Modifica el estado para que se redireccione
        this.setState({ ...this.state, redirect: true })
      })

  };

  //Funcion que Redirecciona a pagina inicial
   renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>

        {this.renderRedirect()}

        <h1>Login</h1>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    )
  }
}



Login.propTypes = {
  authUser: propTypes.func.isRequired,
  user: propTypes.object.isRequired,
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps, { authUser })(Login)




//export default Login