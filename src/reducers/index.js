import {combineReducers} from 'redux'
import alert from './alert'
import register from'./authorize'
export default combineReducers({
alert,register
});