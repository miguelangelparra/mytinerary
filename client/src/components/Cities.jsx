import React from 'react';
import CitiesList from './CitiesList';

class Cities extends React.Component{
  state={
    cities: []
}

  fetchCities = () => {
    this.setState({...this.state, isFetching: true})
    fetch('http://localhost:5000/api/cities')
     .then(response => console.log(response))
      .then(result => this.setState({cities: result, 
                                     isFetching: false}))
      .catch(e => console.log(e));
  }


  componentDidMount(){
this.fetchCities()
  }
  
  render(){
    return(
      <div>
        <h1>Cities</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum velit soluta corrupti sequi excepturi, harum fuga exercitationem adipisci quo facere, minus beatae. Odio, quibusdam deleniti facere unde exercitationem corporis.</p>
        <CitiesList cities={this.cities}></CitiesList>
      </div>
    )
  }
}
export default Cities
