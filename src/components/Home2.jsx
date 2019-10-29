import React from 'react';
import Header from './Header'
import Browsing from './Browsing'
import Account from './Account';
import NavbarCollapse from './NavbarCollapse'
import Carrousel4Img from './Carrousel4img'


class Home2 extends React.Component{
  render(){
    return(
      <div id="home" >
        <NavbarCollapse/>
      <Header />
      <p className="text-center alinearvertical">Find your perfect trip, designed by insiders who know and love their cities</p>
      <Browsing />
      <p className="text-center alinearvertical">Want to build your own Mytinerary?</p>
     <Carrousel4Img/>
      </div>
    )
  }
}
export default Home2