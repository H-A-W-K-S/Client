//All code in this file is copied directly from https://stackoverflow.com/questions/62649381/invariant-violation-main-has-not-been-registered
//by Nathanael Kastner.
import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('X', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('X');
  AppRegistry.runApplication('X', { rootTag });
}