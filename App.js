import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './screens/MainPage';
import MergeSplit from './screens/MergeSplit';
import Leaderboard from './screens/LeaderBoard';
import Settings from './screens/Setting';
import Tutorial from './screens/Tutorial';
import About from './screens/About';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="mainPage" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="leaderboard" component={Leaderboard} options={{ headerShown: false }} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="MergeSplit" component={MergeSplit} options={{ headerShown: true }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
