import React from 'react';
import { connect } from 'react-redux'
import { getCities } from '../actions/citiesActions'
import propTypes from 'prop-types'

class CitiesList extends React.Component {
constructor(props){
super(props)

this.state={
  cities:[]
}
}
  

  async componentDidMount() {
   await this.props.getCities()
    this.setState({cities:this.props.cities})
    console.log(this.state.cities)
  }

  filterCities =  () => {

  }


  render() {
    const { cities } = this.props.cities
    const citiesList = cities.map((city) => {
      return (
        <div key={city._id}> {city.name}, {city.country}  </div>

      )})
    

    return (
      <div>
        {citiesList}
    </div>
    )
    }
}
CitiesList.propTypes = {
  getCities: propTypes.func.isRequired,
  cities: propTypes.object.isRequired
}
const mapStateToProps = (state) => ({ cities: state.cities })
export default connect(mapStateToProps, { getCities })(CitiesList)