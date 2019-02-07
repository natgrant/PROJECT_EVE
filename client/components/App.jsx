import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import SubmitForm from './Form'
import Home from "./Home";


const App = () => {
  return (
    <React.Fragment>
      <Home />
      <Router>
        <div>
          <Route exact path='/form' component={SubmitForm} />
        </div>
      </Router>
    </React.Fragment>

  )
}

export default App