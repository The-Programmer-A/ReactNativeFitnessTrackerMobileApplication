import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput,
TouchableOpacity } from "react-native";

export default class login extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TextInput style={styles.InputBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Username'
          placeholderTextColor="#373741">
          </TextInput>

          <TextInput style={styles.InputBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor="#373741">
          </TextInput>

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> {this.props.type} </Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"  
  },
  InputBox: {
      width: 300,
      height: 50,
      backgroundColor:'rgba(29,138,223,1)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 14,
      marginVertical: 10,
      color: 'rgba(0,0,0,1)'
  },
  button: {
    width: 300,
    backgroundColor: 'rgba(11,28,80,1)',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
      color:'#ffffff',
  }
});
