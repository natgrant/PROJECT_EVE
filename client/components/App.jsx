import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import SubmitForm from './Form'

const App = () => {
  return (
    <Router>
      <div>
        <h1>React development has begun!</h1>
        <Route exact path='/form' component={SubmitForm} />
      </div>
    </Router>
  )
}

export default App