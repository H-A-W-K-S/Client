import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BsQuestionCircle } from 'react-icons/fa';

function StartScreen({ navigation, props }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("LeaderScreen")}>
        <View style={styles.settingsIcon}></View>
      </TouchableOpacity>


      <View style={styles.helpIcon}>

        {/*<BsQuestionCircle /> ?*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  helpIcon: {
    width: 50,
    height: 50,
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
