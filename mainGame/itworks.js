// oh my god it works
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const HelloWorldApp = () => {
  return (
    <WebView
    originWhitelist={['*']}
    source={{ html: '<p>Here I am</p>' }}
/>
  )
}
export default HelloWorldApp;