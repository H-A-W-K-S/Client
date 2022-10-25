import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MainPage from './screens/MainPage';
import Game1 from './screens/Game1';
import Leaderboard from './screens/LeaderBoard';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="mainPage" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="leaderboard" component={Leaderboard} options={{ headerShown: false }} />
        <Stack.Screen name="game1" component={Game1} />
        <Stack.Screen name="signIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="signUp" component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;