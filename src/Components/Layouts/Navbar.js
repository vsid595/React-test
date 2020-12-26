import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/register'

const Navbar = ({ auth: { isAuthenticated }, logout }) => {

  const guestLinks = (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <Link to="/register">
          <div className="navbar-brand" >
            Register
        </div>
        </Link>

        <Link to="/login">
          <div className="navbar-brand" >
            Login
        </div>
        </Link>
      </nav>

    </div>
  );

  const authLinks = (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a onClick={logout} href='#!'>Logout</a>
      </nav>
    </div>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <div style={{ textAlign: "center", marginLeft: '33rem' }} className="navbar-brand" >
            DevConnector
          </div>
        </Link>

        <Fragment>
          {isAuthenticated ? authLinks : guestLinks}
        </Fragment>

        <span className="navbar-text">
          Developers Community
        </span>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({

  auth: state.register
})
export default connect(mapStateToProps, { logout })(Navbar)