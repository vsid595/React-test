import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar';
import Landing from './Components/Layouts/Landing';
import Register from './Components/auth/Register';
import Alert from './Components/Layouts/Alert';
import Login from './Components/auth/Login';
import dashboard from '../src/Components/dashboard/Dashboard'
import PrivateRoute from '../src/Components/routing/PrivateRoute'
import './Components/Layouts/bg_style.css';


//Redux
import { Provider } from 'react-redux'
import store from './store'

import {loadUser} from './actions/register'
import setToken from './utils/setAuthToken' 

if (localStorage.token) setToken(localStorage.token)

const App = () => {
useEffect(()=>{
  store.dispatch(loadUser())
},[])


  return (
    <Provider store={store}>
      <Router>
        <Fragment >

          <Navbar />

          <Route exact path="/" component={Landing} />

          <section className='container'>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/dashboard" component={dashboard} />
            </Switch>

          </section>
          <Alert />

        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
