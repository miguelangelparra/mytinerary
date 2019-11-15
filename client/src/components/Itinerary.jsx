import React, { Component } from 'react'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { connect } from 'react-redux'
import { getItinerary } from '../redux/actions/itineraryActions'

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
    this.setState({ itinerary: this.props.itinerary.itinerary })
  }
  render() {

    const itinerariesList = this.state.itinerary.map((itinerary) => {
      return (
        <div key={itinerary.title}>
          <div className="row">
            <div className="col-4">
              <img src={itinerary.profilePic} alt={itinerary.title} style={{ width: "100%", height: "20vh"}} />
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-12"></div>
                <h2>{itinerary.title}</h2>

              </div>
              <div className="row">
                <div className="col-3">
                  <span>Likes:{itinerary.rating}</span>
                </div>

                <div className="col-5">
                  <span>{itinerary.duration} Hours</span>

                </div>

                <div className="col-3">
                  <span>$${itinerary.price}</span>

                </div>

              </div>
              <div className="row">
                {itinerary.hashtag.map((hash) => { return (<div className="col">{hash}</div>) })}
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button className="col-12">View all</button>
            </div>
          </div>
        </div>


      )
    }
    )

   // const imgCity = this.props.match.params.city
    //const cityItinerary = () => {return (<div style={{backgroundImage:"url("+{props.match.params.city}+")"}}></div>)}

    return (
      <div>
        <NavbarCollapse></NavbarCollapse>

        {itinerariesList}
      </div >
    )
  }
}

Itinerary.propTypes = {
  getItinerary: propTypes.func.isRequired,

  itinerary: propTypes.object.isRequired,
}

const mapStateToProps = (state) => ({ itinerary: state.itinerary })
export default connect(mapStateToProps, { getItinerary })(Itinerary)