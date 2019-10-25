import React from 'react'
import homeIcon from '../assets/img/homeIcon.png'
import {Link} from 'react-router-dom'



class Footer extends React.Component{
  render(){
    return(
      <footer className="alinearvertical text-center">
    <Link to="/"><img id="homeIcon" src={homeIcon} alt="Home Icon" /></Link>
</footer>


    )
  }
}

export default Footer