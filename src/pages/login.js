import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from '../components/logo';
import Form from '../components/Form';


export default class login extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Logo/>
                <Form/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '##0E2F44',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
