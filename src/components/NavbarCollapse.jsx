import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Account from './Account'
import Popover from 'react-bootstrap/Popover'
import img from '../assets/img/homeIcon.png'



const NavbarCollapse = () => {
  return (

    <Navbar bg="light" expand="lg">
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Title as="h3">{`Popover`}</Popover.Title>
            <Popover.Content>
              <Account />
            </Popover.Content>
          </Popover>
        }
      >
        <Button variant="secondary"><img
          src={img}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          roundedCircle
        /></Button>
      </OverlayTrigger>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarCollapse