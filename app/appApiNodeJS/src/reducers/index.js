import { combineReducers } from 'redux';
import login from './login-reducer';

export default combineReducers({
    token: login
});
