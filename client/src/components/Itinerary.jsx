import React, { Component } from 'react'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { connect } from 'react-redux'
import { getItinerary } from '../redux/actions/itineraryActions'
import { UncontrolledCollapse, Button, CardBody, Card, Container} from 'reactstrap';


import propTypes from 'prop-types'

class Itinerary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      itinerary: [],
    }
  }

  async componentDidMount() {
    await this.props.getItinerary(this.props.match.params.city)
    this.setState({ itinerary: this.props.itinerary.itinerary })
    this.setState({ cities: this.props.cities.cities })
  }

  handleToggle = (e) => {
    console.log(e.target.value)


  }
  render() {
    const cityHeader = this.props.cities.cities.filter(city => city._id == this.props.match.params.city)[0]
    const itinerariesList = this.state.itinerary.map((itinerary, index) => {
      return (
        <div key={itinerary._id}>
          <div className="row">
            <div className="col-4">
              <img src={itinerary.profilePic} alt={itinerary.title} style={{ width: "100%", height: "20vh" }} />
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
                {itinerary.hashtag.map((hash) => { return (<div key={hash} className="col">{hash}</div>) })}
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Button className="col-12 btn btn-large bg-primary" id={"Collapse"+ itinerary._id} onClick={this.handleToggle}>View all</Button>
              <UncontrolledCollapse toggler={"Collapse"+itinerary._id}>
              {itinerary.activities.map((act) => { return (<div key={act} >{act}</div>) })}

              </UncontrolledCollapse>
            </div>
          </div>
        </div>


      )
    }
    )

    // const imgCity = this.props.match.params.city
    //const cityItinerary = () => {return (<div style={{backgroundImage:"url("+{props.match.params.city}+")"}}></div>)}

    return (
      <Container fluid>
        <NavbarCollapse></NavbarCollapse>
        <div className="">
          {<img className="img-filter" src={require(`../assets/img/cities/${cityHeader.imagen.toLowerCase().split(" ").join("")}.jpg`)} alt="" />}
          <p className="img-title">{cityHeader.name}  </p>
        </div>
        <h4>Available MYtineraries</h4>

        {itinerariesList}
      </Container>
    )
  }
}

Itinerary.propTypes = {
  getItinerary: propTypes.func.isRequired,

  itinerary: propTypes.object.isRequired,
  cities: propTypes.object.isRequired,

}

const mapStateToProps = (state) => ({ cities: state.cities, itinerary: state.itinerary })
export default connect(mapStateToProps, { getItinerary })(Itinerary)