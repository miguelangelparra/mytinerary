import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: '',
      userName: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      country: '',
      termsConditions: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log('action post user ocurrio');

    var url = 'http://localhost:5000/api/users';
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
      .then(response => console.log('Success:', response));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Create Account</h1>
        <Form.Group as={Row} controlId='pic'>
          <Form.Label column sm='2'>
            {' '}
            URL Pic
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              onChange={this.handleChange}
              type='url'
              placeholder='Enter a pic '
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='userName'>
          <Form.Label column sm='2'>
            User Name
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              onChange={this.handleChange}
              type='text'
              placeholder='Enter a User Name'
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='email'>
          <Form.Label column sm='2'>
            Email address
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              onChange={this.handleChange}
              type='email'
              placeholder='Enter email'
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='password'>
          <Form.Label column sm='2'>
            Password
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              onChange={this.handleChange}
              type='password'
              placeholder='Password'
            />{' '}
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='firstName'>
          <Form.Label column sm='2'>
            First Name
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              onChange={this.handleChange}
              type='text'
              placeholder='Enter your First Name'
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='lastName'>
          <Form.Label column sm='2'>
            Last Name
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              onChange={this.handleChange}
              type='text'
              placeholder='Enter your Last Name'
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='country'>
          <Form.Label column sm='2'>
            Country:
            <select
              id='country'
              value={this.state.country}
              onChange={this.handleChange}
            >
              <option value='spain'>Spain</option>
              <option value='ireland'>Ireland</option>
              <option value='holland'>Holland</option>
              <option value='england'>England</option>
              <option value='unitedstate'>United States</option>
              <option value='germany'>Germany</option>
              <option value='france'>France</option>
            </select>
          </Form.Label>
        </Form.Group>

        <Form.Group as={Row} controlId='termsConditions'>
          <Col sm='10'>
            <input
              type='checkbox'
              name='check'
              id='termsConditions'
              onChange={this.handleChange}
            />
          </Col>
          <Form.Label column sm='2'>
            I Agree to MYtinerary's
            <a>Terms Conditions</a>
          </Form.Label>
        </Form.Group>
        <Button variant='primary' type='submit'>
          {' '}
          OK{' '}
        </Button>

        {/* <div>
         <h1>Create Account</h1>
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
           <button type="submit" className="btn btn-primary" >Create Account</button>
         </form>
       </div>*/}
      </Form>
    );
  }
}

export default CreateAccount;
