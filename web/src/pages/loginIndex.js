import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Login from '../components/login/loginForm'


class LoginIndex extends Component {
    render() {
        return (
            <div style={{ padding: 24, background: '#fff', minHeight: 450 }}>
                <Login />
            </div>
        );
    }
}

export default LoginIndex;