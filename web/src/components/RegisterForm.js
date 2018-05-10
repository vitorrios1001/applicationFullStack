import React, { Component } from 'react';

class RegisterForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {

        console.log(this.state);

        return (
            <div style={{textAlign: "center", paddingTop: "150px"}}>
                <div >
                    <h1  >Register</h1>
                </div>

                <div>
                    <form>
                        <li>
                            <input
                                placeholder="Digite seu nome"
                                onChange={event => this.setState({ name: event.target.value })}
                            />
                        </li>
                        <li>
                            <input
                                placeholder="Digite seu email"
                                autoComplete="email"
                                onChange={event => this.setState({ email: event.target.value })}
                            />
                        </li>
                        <li>
                            <input placeholder="Digite seu password"
                                onChange={event => this.setState({ password: event.target.value })}
                                type="password"
                            />
                        </li>
                        <br />
                        <input
                            type="submit"
                            value="Register"
                        />
                    </form>
                </div>
            </div>
        );

    }
}


export default RegisterForm;
