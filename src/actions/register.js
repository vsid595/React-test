import {
    REG_SUCCESS, REG_FAIL,
    AUTH_FAIL, USER_LOADED,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT
} from './types';
import setToken from '../utils/setAuthToken'
import axios from 'axios'
import { setAlert } from "./alert";

// Load User at the beginning
export const loadUser = () => async dispatch => {
    if (localStorage.token) setToken(localStorage.token)

    try {
        const res = await axios.get('api/auth')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_FAIL
        })
    }
}

//Register the User and load
export const register = ({ name, email, password }) => async dispatch => {

    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password })

    try {
        const res = await axios.post('api/users', body, config)
        dispatch({
            type: REG_SUCCESS,
            payload: res.data
        })
        dispatch(setAlert("Registration Success", 'success'))
        dispatch(loadUser())
    } catch (error) {
        dispatch({
            type: REG_FAIL
        })
        dispatch(
            setAlert("Registration failed", 'danger')
        )
    }
}

//User Login
export const login = ( {email, password} ) => async dispatch => {

    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('api/auth', body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(setAlert("Login Success", 'success'))
        dispatch(loadUser())
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
        dispatch(setAlert("Login failed", 'danger'))
    }
}

//User Logout

export const logout = () =>dispatch =>{
dispatch({
    type : LOGOUT
})
}
