import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../images/logo.png")}
        />
        <Text style={styles.logoText}>Welcome To My Fitness Tracker!</Text>
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
  logoText : {
      marginVertical: 15,
      fontSize:22,
      color:"rgba(0, 0, 0, 0.7)"

  }
});
