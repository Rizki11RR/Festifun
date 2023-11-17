// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Beranda, Login, Register } from '../../pages/main';


function Routes() {
  return (
    <Router>
      <Switch>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/'>
          <Beranda />
        </Route>

      </Switch>
    </Router>
  )
}

export default Routes