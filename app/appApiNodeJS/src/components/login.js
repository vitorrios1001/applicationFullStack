import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchLogin } from '../actions/login-action';

import { Actions } from 'react-native-router-flux';

class login extends Component {

    render () {
        return (            
            <View>
                <Text>Hello world</Text>
            </View>
        );                   
    }
}

const mapStateToProps = (state) => {
    return { login: state.token };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchLogin }, dispatch );
};

export default connect(mapStateToProps, mapDispatchToProps)(login);