import React from 'react';
import { connect } from 'react-redux'
import { getCities } from '../actions/citiesActions'
import propTypes from 'prop-types'

class CitiesList extends React.Component {

  /* const citiesList =  Cities.map((city)=>{return (
     <div>
     {city.id},
    {city.name} ,
     {city.country}
     </div>)})
     
     {citiesList}
*/
  /*fetchCities = () => {
    this.setState({...this.state, isFetching: true})
    fetch('http://localhost:5000/api/cities')
     .then(response => console.log(response))
      .then(result => this.setState({cities: result, 
                                     isFetching: false}))
      .catch(e => console.log(e));
  }*/


  componentDidMount() {
    this.props.getCities()
  }

  render() {
    const { cities } = this.props.cities
    return (
      <div>
        {cities}
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