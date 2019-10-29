import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import "./assets/css/styles.css"
import Home2 from './components/Home2'
import Cities from './components/Cities'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount';

//import Home from './components/Home'
// <Route exact path='/' component={Home} />

//import Footer from './components/Footer'
//        <Footer />




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app" className="container d-flex align-items-center flex-column">
         
        <Route exact path='/' component={Home2} />
        <Route  path='/cities' component={Cities} />
        <Route path='/login' component={Login} />
        <Route path='/createAccount' component={CreateAccount} />

        </div>
      </BrowserRouter>
    )
  }
}
export default App