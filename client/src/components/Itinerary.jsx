import React, { Component } from 'react'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { connect } from 'react-redux'
import { getItinerary } from '../actions/itineraryActions'

import propTypes from 'prop-types'

class Itinerary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itinerary: [],
    }
  }

  async componentDidMount() {
    console.log(this.props.match.params.city)
    await this.props.getItinerary(this.props.match.params.city)
    this.setState({ itinerary: this.props.itinerary})
  }
  render() {

    return (
      <div>
        <NavbarCollapse></NavbarCollapse>
        <h1>{this.state.itinerary}</h1>
      </div>
    )
  }
}

Itinerary.propTypes = {
  getItinerary: propTypes.func.isRequired,

  itinerary: propTypes.object.isRequired,
}

const mapStateToProps = (state) => ({ itinerary: state.itinerary })
export default connect(mapStateToProps, { getItinerary })(Itinerary)