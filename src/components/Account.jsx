import React from 'react';
//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const Account = () => {
  return (
   <ButtonToolbar className="justify-content-around">
  <Button href="/login" variant="primary" size="lg" active>
    Log in
  </Button>
  <Button href="/createAccount" variant="success" size="lg" active>
    Create Account
  </Button>
</ButtonToolbar>

  /* <div id="divAccount" className="container-fluid alinearvertical row d-flex justify-content-around " >
      <Link to='/login' className="col-5 btn btn-large bg-success font-weight-bold alinearvertical">Log in</Link>
      <Link to='/createAccount' className="col-5 btn btn-large bg-primary font-weight-bold alinearvertical">Log up!</Link>
    </div>*/
  )
}

export default Account