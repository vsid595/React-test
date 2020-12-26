import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions/register'

const Login = ({  login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        try {
            login({email, password})
           
        } catch (error) {
          
        }
    }

//Redirect if logged in

if(isAuthenticated){
    return <Redirect to='/dashboard'></Redirect>
}

    return (
        <Fragment>
            <form style={{ marginLeft: '20%', marginTop: '5%' }} onSubmit={e => onSubmit(e)} >

                <div className="form-group">
                    <label >Email address</label>
                    <input style={{ width: "50%" }}
                        type="email" className="form-control"
                        id="email" aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        value={email}
                        autoComplete="off"
                        autoFocus
                        onChange={e => onChange(e)}
                        name='email'
                        required
                    />

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

const mapStateToProps = state =>({
   
   isAuthenticated : state.register.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)