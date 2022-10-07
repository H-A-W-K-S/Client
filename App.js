import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./app/screens/StartScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={WelcomeScreen} // <----
    />
    <Stack.Screen
      name="Start"
      component={StartScreen} // <----
    />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={WelcomeScreen} />
        {/*<Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>*/}
        <Stack.Screen name="Start" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
