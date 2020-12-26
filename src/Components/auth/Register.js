import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { register } from '../../actions/register';

const Register = ({ isAuthenticated, register }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        register({ name, email, password })
    }


    if (isAuthenticated) {
       return <Redirect to='/dashboard' />
    }
    return (
        <Fragment>
            <form style={{ marginLeft: '20%', marginTop: '5%' }} onSubmit={e => onSubmit(e)} >
                <div className="form-group"  >
                    <label >Name</label>
                    <input style={{ width: "50%" }} type="text"
                        className="form-control" id="username"
                        placeholder="Enter Username"
                        autoComplete="off"
                        autoFocus
                        required
                        name='name'
                        value={name} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input style={{ width: "50%" }}
                        type="email" className="form-control"
                        id="email" aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        value={email}
                        required
                        autoComplete="off"
                        onChange={e => onChange(e)}
                        name='email'
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label >Password</label>
                    <input style={{ width: "50%" }}
                        type="password" className="form-control"
                        id="password" placeholder="Password"
                        value={password} onChange={e => onChange(e)}
                        name='password'
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    )
}

const mapStateToProps = state =>( {
     isAuthenticated: state.register.auth
})

export default connect(mapStateToProps, { register })(Register)