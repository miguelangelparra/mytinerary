import React from 'react';
import {Link} from 'react-router-dom';



class Account extends React.Component{
  render(){
    return(
      <div id="divAccount" className="container-fluid alinearvertical row d-flex justify-content-around " >
      <Link to='/login' className="col-5 btn btn-large bg-success font-weight-bold alinearvertical">Log in</Link>
      <Link to='/createAccount' className="col-5 btn btn-large bg-primary font-weight-bold alinearvertical">Create Account</Link>
      </div>
    )
  }
}

export default Account