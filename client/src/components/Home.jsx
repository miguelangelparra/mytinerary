import React from 'react';
import Header from './Header'
import Browsing from './Browsing'
import Account from './Account';

class Home extends React.Component {
  render() {
    return (
      <div id="home" >
        <Header />
        <p className="text-center alinearvertical">Find your perfect trip, designed by insiders who know and love their cities</p>
        <Browsing />
        <p className="text-center alinearvertical">Want to build your own Mytinerary?</p>
        <Account />
      </div>
    )
  }
}
export default Home