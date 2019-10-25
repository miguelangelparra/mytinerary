import React from 'react';

class CreateAccount extends React.Component {
  render() {
    return (
      <div>
      <h1>Create Account</h1>
      <form>
        <div className="form-group">
          <label for="inputEmail">Email address</label>
          <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="inputPassword1">Password</label>
          <input type="password" className="form-control" id="inputPassword1" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
      </div>
    )
  }
}
export default CreateAccount