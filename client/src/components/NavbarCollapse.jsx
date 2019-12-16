import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'

import Account from './Account'
import Popover from 'react-bootstrap/Popover'
import img from '../assets/img/profileIcon.png'

import { connect } from 'react-redux'
import { authUser } from "../redux/actions/userActions"
import propTypes from 'prop-types'


class NavbarCollapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ""
    }
  }
  //Antes de montar el componente confirme si existe un token, si exite entonces ejecuta la accion que modifica el state
  async componentDidMount() {
    if (localStorage.getItem("token") !== "undefined" && localStorage.getItem("token") !== "null") {
      await this.props.authUser()
    }
    this.setState({ user: this.props.user.user })
  }

  //EXPERIMENTAL  + Buscando resolver bug en la renderizacion automatica de los datos del totem
  componentWillReceiveProps() {
    this.setState({ user: this.props.user.user })
  }


  render() {
    const user = this.state.user
    return (

      <Navbar bg="light" expand="lg">
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Title as="h3">{`Welcome`}</Popover.Title>
              <Popover.Content>
                <Account />
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="white"><img
            src={(user.pic == undefined) ? img : user.pic}
            width="30"
            height="30"
            className="d-inline-block align-top bg-white"
            alt="React Bootstrap logo"
          /></Button>
        </OverlayTrigger>
        <h4>{user.userName} </h4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

NavbarCollapse.propTypes = {
  authUser: propTypes.func.isRequired,
  user: propTypes.object.isRequired,
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps, { authUser })(NavbarCollapse)


//export default NavbarCollapse