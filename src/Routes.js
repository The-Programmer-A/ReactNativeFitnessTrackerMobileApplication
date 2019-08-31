import React, { Component } from "react";
import { Text } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Log from '../src/pages/login';
import Reg from '../src/pages/signup';

export default class Routes extends Component {
    render(){
        return(
            <Text> hello </Text>
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Log} title="Login" initial={true}/>
                    <Scene key="register" component={Reg} title="Register"/>
                </Stack>
          </Router>
        )
    }
}