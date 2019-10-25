import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import "./assets/css/styles.css"
import Home from './components/Home'
import Cities from './components/Cities'
import Login from './components/Login'
import Footer from './components/Footer'
import CreateAccount from './components/CreateAccount';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app" className="container d-flex align-items-center flex-column">
         
        <Route exact path='/' component={Home} />
        <Route  path='/cities' component={Cities} />
        <Route path='/login' component={Login} />
        <Route path='/createAccount' component={CreateAccount} />
          <Footer />

        </div>
      </BrowserRouter>
    )
  }
}
export default App