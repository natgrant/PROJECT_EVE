import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import SubmitForm from './Form'
import Home from "./Home";


const App = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <h1>PROJECT EVE</h1>
      </div>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/form' component={SubmitForm} />
        </div>
      </Router>
    </React.Fragment>

  )
}

export default App