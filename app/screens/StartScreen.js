import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function StartScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.settingsIcon}></View>
      <View style={styles.helpIcon}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsIcon: {
    width: "50%",
    height: 70,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  helpIcon: {
    width: "50%",
    height: 70,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
export default StartScreen;
