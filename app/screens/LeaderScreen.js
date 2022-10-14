import React from "react";
import { FaRoute } from "react-icons/fa";
import { Text, View, StyleSheet, FlatList, useState } from "react-native";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

export default function LeaderScreen({ route }) {
  return (
    <View>
      <Text>{route.params.namm}, {route.params.score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

})

