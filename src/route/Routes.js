import React, { Component } from "react";
import {Router, Stack, Scene} from 'react-native-router-flux';

import Log from '../pages/login';
import Reg from '../pages/signup';

export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Log} title="Login" initial={true}/>
                    <Scene key="register" component={Reg} title="Register"/>
                </Stack>
          </Router>
        );
    }
}