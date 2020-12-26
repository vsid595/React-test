import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({ component: Component,auth }) => (

    <Route render= {props =>
       auth ? (<Component></Component>) : <Redirect to='/login'></Redirect>
    }></Route>


)

const mapStateToProps = state => ({
    auth: state.register.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute)