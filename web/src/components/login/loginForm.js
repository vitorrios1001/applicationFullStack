import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '../css/loginForm.css';
const FormItem = Form.Item;

class LoginForm extends Component {

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // }

    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div class="container">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {/* {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })( */}
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        {/* )} */}
                    </FormItem>
                    <FormItem>
                        {/* {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })( */}
                        <Link to="/">
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </Link>
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


export default LoginForm;