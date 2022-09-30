/*Starting code for window. Not everything is working yet, but this is a start.*/
/*Nathanael Kastner*/
/*9/29/2022*/
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
{/*import { AutoHeightWebView } from 'react-native-autoheight-webview';*/ }

/*App with webview for game website*/
export default function App() {
  return (
    <WebView
      source={{ uri: "https://computing.calvin.edu/" }}
    >
      <TouchableOpacity style={styles.button}>
        <Text>View Score</Text>
      </TouchableOpacity>
    </WebView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'top',
    borderWidth: 1,
    backgroundColor: 'green',
    color: 'black',
  },
  topview: {
    alignItems: 'top',
    backgroundColor: 'blue',
  }
});
