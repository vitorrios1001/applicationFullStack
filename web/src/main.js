import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Routes from './routes/routes'

import {
  Route,
  BrowserRouter as Router,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
//import Login from './pages/loginIndex'

import App from './theme/App';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(
  ({ history }) => 
    fakeAuth.isAuthenticated
      ?(
        <p>
          Welcome!{" "}
          <input type="submit" value="SignOut"
            onClick={ () => { fakeAuth.signout( () => history.push("/")) } }
          />
           
        </p>
      )
      :(
        <p>You are not Logged in.</p>
      )
)

const Public = () => <h3>Public </h3>

const Protected = () => <h3>Protected </h3>

class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }

  render() {

    const { redirectToReferrer } = this.state

    const { from } = this.props.location.state || { from: { pathname: "/" } }

    if (redirectToReferrer === true) {
      return (
        <Redirect to={from} />
      )
    }


    return (
      <div>
        <p>Login page  {from.pathname}</p>
        <button onClick={this.login} >Log in </button>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...res }) => (
  <Route {...res} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

class Main extends Component {

  render() {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li><Link to='/public'>Public Page</Link></li>
            <li><Link to='/protected'>Protected Page</Link></li>
          </ul>

          <Route path='/public' component={Public} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/protected' component={Protected} />
        </div>

      </Router>

    )
  }
}

// const mapStateToProps = state => ({
//   logged: state.login.logged
// })
/*
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts
}, dispatch);*/

export default Main;