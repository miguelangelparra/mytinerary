import React from 'react';
import { connect } from 'react-redux'
import { getCities } from '../actions/citiesActions'
import { filterCities } from '../actions/citiesActions'

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
    console.log(this.state.cities)
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
    console.log(this.state.citiesFiltered)

  }
//Imagenes[city.name]
  render() {
    const { cities } = this.props.cities
    const { citiesFiltered } = this.props.citiesFiltered
    const citiesList = this.state.citiesFiltered.map((city) => {
      return (
        <div key={city._id} >
                    { <img src={require(`../assets/img/cities/${city.name.toLowerCase().split(" ").join("")}.jpg`)} alt=""/> }
                    {/* { <img src={require(Imagenes[city.name])} alt=""/> } */}
           {city.name}, {city.country}  </div>
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