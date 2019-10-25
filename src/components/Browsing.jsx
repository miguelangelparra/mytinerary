import React from 'react';
import {Link} from 'react-router-dom'
import browsingIcon from '../assets/img/browsingIcon.png'

class Browsing extends React.Component{
  render(){
    return (
      <div className="text-center alinearvertical ">
      <h3>Start browsing</h3>
      <Link to="/cities"><img id="browsingIcon" src={browsingIcon} alt="Flecha Browsing"/></Link>
      </div>
    )
  }
}

export default Browsing