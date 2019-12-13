import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    var url = 'http://localhost:5000/api/users/login';
    var data = this.state;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) =>{ console.log('Success:', response)
    localStorage.setItem("token",response.token)});
  };
  

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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

export default Login