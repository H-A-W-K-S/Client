import * as React from "react";
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Image, ImageBackground, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BsQuestionCircle } from 'react-icons/fa';

function StartScreen({ navigation, props }) {

  const [players, setPlayers] = useState([
    {
      namm: "John", score: 61
    },
    {
      namm: "Mary", score: 59
    },
  ]);

  return (
    <View style={styles.container}>

      <FlatList data={players} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("LeaderScreen", item)}>
          <View style={styles.settingsIcon}></View>
        </TouchableOpacity>
      )}
      />
      <View style={styles.helpIcon}>
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
