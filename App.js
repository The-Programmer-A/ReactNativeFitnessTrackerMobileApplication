import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        {/* <Text>Hello World</Text> */}
        <Login/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
