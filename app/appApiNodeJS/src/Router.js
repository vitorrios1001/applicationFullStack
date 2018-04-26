import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import login from './components/login';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={login} title="Login" initial />
            </Stack>            
        </Router>
    );
};


export default RouterComponent;