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
    console.log(this.state)
  }

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
          Submit
        </Button>
      </Form>
      /*  <div>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" onChange={this.handleOnChange} placeholder="Password"></input>
            </div>
            <button type="submit" className="btn btn-primary" >Login</button>
          </form>
        </div>*/
    )
  }
}
export default Login