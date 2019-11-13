import React from 'react';
import { connect } from 'react-redux'
import { getCities } from '../actions/citiesActions'
import { filterCities } from '../actions/citiesActions'
import { Link } from 'react-router-dom'

import propTypes from 'prop-types'

class CitiesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: [],
      citiesFiltered: []
    }
  }

  async componentDidMount() {
    await this.props.getCities()
    this.setState({ cities: this.props.cities.cities, citiesFiltered: this.props.cities.cities })
  }

  handleChange = (e) => {

    this.props.filterCities(e.target.value, this.props.cities.cities)
    let filteredcities = this.props.cities.cities


    filteredcities = filteredcities.filter((city) => {
      let cityName = city.name.toLowerCase()
      return cityName.includes(
        e.target.value.toLowerCase())
    })

    this.setState({ ...this.state, citiesFiltered: filteredcities })

  }
  render() {
    const { cities } = this.props.cities
    const { citiesFiltered } = this.props.citiesFiltered
    const citiesList = this.state.citiesFiltered.map((city) => {
      return (
        <div key={city._id} className="img-div">
          <Link to={'/' + city.name }>
                    { <img className="img-filter" src={require(`../assets/img/cities/${city.name.toLowerCase().split(" ").join("")}.jpg`)} alt=""/> }
           <p className="img-title">{city.name}, {city.country} </p> </Link>
           </div>
      )
    })
    return (
      <div>
        <label htmlFor="filter">Filter by City: </label>
        <input type="text" id="filter" value={this.searchCity} onChange={this.handleChange} />
        {citiesList}
      </div>
    )
  }
}
CitiesList.propTypes = {
  getCities: propTypes.func.isRequired,
  filterCities: propTypes.func.isRequired,

  cities: propTypes.object.isRequired,
  citiesFiltered: propTypes.object.isRequired
}
const mapStateToProps = (state) => ({ cities: state.cities, citiesFiltered: state.citiesFiltered })
export default connect(mapStateToProps, { getCities, filterCities })(CitiesList)