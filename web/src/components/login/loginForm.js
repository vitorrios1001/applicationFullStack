import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchLogged from './../../actions/loginActions';

import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '../css/loginForm.css';
const FormItem = Form.Item;

class LoginForm extends Component {
    /*
    constructor(props){
        super(props)
        this.state = {
            user:{
                userName: '',
                password: ''
            }            
        }
    }*/

    state = {
        userName: '',
        password: ''
    }
    
    handleChangeUserName = (value) => {  
        this.setState(this.setState());
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.fetchLogged();
        <Link to="/#/" />
        
        /*this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });*/
    }

    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div class="container">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {/* {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })( */}
                        <Input onChange={ event => this.setState({userName: event.target.value})} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        {/* )} */}
                    </FormItem>
                    <FormItem>
                        {/* {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })( */}
                        
                            <Input onChange={ event => this.setState({password: event.target.value})}  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        
                        {/* )} */}
                    </FormItem>
                    <FormItem>
                        {/* {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })( */}
                        <Checkbox>Remember me</Checkbox>
                        {/* )} */}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
              </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    logged: state.login.logged
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchLogged
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
