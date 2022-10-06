import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      resizeMode="contain"
      style={styles.background}
      source={require("../assets/ffffff.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text>Something Catchy</Text>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Start")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 400,
    height: 400,
  },
  logoContainer: {
    position: "absolute",
    top: "30%",
    alignItems: "center",
  },
});
export default WelcomeScreen;
