import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from '../components/logo';
import Form from '../components/Form';


export default class login extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signUpTextContent}>
                    <Text style={styles.SignUpText}>Don't have an account yet?</Text>
                    <Text style={styles.sig}> Register</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '##0E2F44',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signUpTextContent: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    SignUpText: {
        color: 'rgba(0,0,0,1)',
        fontSize: 16
    },
    sig: {
        color: 'rgba(200, 50, 100, 1)',
        fontSize: 16,
        fontWeight: '500'
    }
});
  
