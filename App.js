import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import Routes from './src/Routes';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        {/* <Text>Hello World</Text> */}
        <Routes/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
